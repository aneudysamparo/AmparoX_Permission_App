<template>
  <div>
    <div class="row">
      <div class="col">
        <div class="d-flex justify-content-between">
          <h3>List Page</h3>
          <router-link class="btn btn-primary" to="/permissions/add">Add New</router-link>
        </div>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Type</th>
              <th scope="col">Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in data" :key="item.id">
              <th scope="row">{{ item.id}}</th>
              <td>{{ item.firstName}}</td>
              <td>{{ item.lastName}}</td>
              <td>{{ item.permissionType.description}}</td>
              <td>{{ item.date | moment("dddd, MMMM Do YYYY")}}</td>
              <td>
                <button @click="onEdit(item.id)" class="btn btn-secundary btn-sm">Edit</button>
                <button @click="onDelete(item.id, index)" class="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      data: [],
    };
  },
  methods: {
    onEdit: function (id) {
      this.$router.push("/permissions/" + id);
    },
    onDelete: function (id, index) {
      if (confirm("Do you really want to delete?")) {
        axios
          .delete("https://localhost:5001/api/Permissions/" + id)
          .then((_) => {
            console.log(_);
            this.data.splice(index, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
  mounted() {
    axios
      .get("https://localhost:5001/api/Permissions")
      .then((response) => (this.data = response.data))
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>