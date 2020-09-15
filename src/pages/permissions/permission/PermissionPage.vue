<template>
  <div class="permission-form">
    <div class="row">
      <div class="col">
        <div class="mb-3">
          <h3>{{ title }}</h3>
        </div>
        <form @submit="onSubmit">
          <div class="form-group">
            <label for="firstName">First Name</label>
            <input type="text" class="form-control" id="firstName" v-model="addForm.firstName" />
            <small v-if="errors.firstName" class="form-text text-danger">First name is required with at least 3 characters.</small>
          </div>
          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input type="text" class="form-control" id="lastName" v-model="addForm.lastName" />
          </div>
          <div class="form-group">
            <label for="permissionTypeId">Permission Type</label>
            <select class="form-control" id="permissionTypeId" v-model="addForm.permissionTypeId">
              <option
                v-for="item in permissionTypes"
                :key="item.id"
                :value="item.id"
                :selected="item.id == addForm.permissionTypeId"
              >{{ item.description }}</option>
            </select>
          </div>
          <div class="form-group">
            <label for="date">Date</label>
            <b-form-datepicker v-model="addForm.date" locale="en"></b-form-datepicker>
          </div>
          <button
            type="submit"
            v-bind:disabled="disableSubmitButton"
            class="btn btn-primary"
          >Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      permissionTypes: [],
      id: this.$route.params.id,
      title: this.$route.params.id ? "Edit Permission" : "Add Permission",
      addForm: {
        firstName: "",
        lastName: "",
        permissionTypeId: 0,
        date: "",
      },
      errors: {
        firstName: null,
        lastName: null,
        permissionType: null,
        date: null
      }
    };
  },
  computed: {
    disableSubmitButton(){
      return (this.addForm.firstName.length < 3)
              || (this.addForm.lastName.length < 3) 
              || (this.addForm.permissionTypeId == 0)
              || (this.addForm.date == '')
    }
  },
  methods: {
    onSubmit: function (e) {


      if (this.id && this.id > 0) {
        axios
          .put(
            "https://localhost:5001/api/Permissions/" + this.$route.params.id,
            JSON.stringify(this.addForm),
            {
              headers: { "Content-Type": "application/json" },
            }
          )
          .then(() => {
            this.$toasted.success('Permission edited');
            window.history.length > 1
              ? this.$router.go(-1)
              : this.$router.push("/");
          });
      } else {
        axios
          .post(
            "https://localhost:5001/api/Permissions/",
            JSON.stringify(this.addForm),
            {
              headers: { "Content-Type": "application/json" },
            }
          )
          .then(() => {
            this.$toasted.success('Permission added');
            window.history.length > 1
              ? this.$router.go(-1)
              : this.$router.push("/");
          });
      }
    
      
      
      e.preventDefault();
    
    },
  },
  mounted() {
    axios
      .get("https://localhost:5001/api/PermissionTypes")
      .then((response) => (this.permissionTypes = response.data));
    if (this.id && this.id > 0) {
      axios
        .get("https://localhost:5001/api/Permissions/" + this.$route.params.id)
        .then((response) => {
          this.addForm = response.data;
          this.addForm.permissionTypeId = response.data.permissionType.id;
        });
    }
  },
};
</script>
<style lang="scss" scoped>
.vdp-datepicker {
  input {
    box-sizing: border-box;
    width: 100%;
    border-color: transparent;
  }
}
</style>