<template>
  <div class="permission-form">
    <form>
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input type="text" class="form-control" id="firstName" v-model="addForm.firstName" />
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
      <button @click="onSubmit()" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      permissionTypes: [],
      addForm: {
        firstName: '',
        lastName: '',
        permissionTypeId: '',
        date: '',
      },
    };
  },
  methods: {
    onSubmit: function () {
      axios
        .put(
          "https://localhost:5001/api/Permissions/"+ this.$route.params.id,
          JSON.stringify(this.addForm),
          {
            headers: {'Content-Type': 'application/json'}
          }
        )
        .then(() => {
          window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
        });
    },
  },
  mounted() {
    axios
      .get("https://localhost:5001/api/PermissionTypes")
      .then((response) => (this.permissionTypes = response.data));
    axios
      .get("https://localhost:5001/api/Permissions/" + this.$route.params.id )
      .then((response) => {
        this.addForm = response.data;
        this.addForm.permissionTypeId = response.data.permissionType.id
      });

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