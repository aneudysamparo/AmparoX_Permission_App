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
        <label for="permissionType">Permission Type</label>
        <select class="form-control" id="permissionType" v-model="addForm.permissionType">
          <option>Emergency</option>
          <option>School</option>
          <option>Vacation</option>
          <option>Wedding</option>
          <option>Birthday</option>
        </select>
      </div>
      <div class="form-group">
        <label for="date">Date</label>
        <input type="text" class="form-control" id="date" v-model="addForm.date" />
      </div>
      <button @click="onSubmit()" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      addForm: {
        firstName: "",
        lastName: "",
        permissionType: "",
        date: "",
      },
    };
  },
  methods: {
    onSubmit: function () {
      console.log(this.addForm);
    },
  },
};
</script>