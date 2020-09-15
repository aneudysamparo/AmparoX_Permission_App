<template>
  <div>
    <div class="row">
      <div class="col">
        <div class="d-flex justify-content-between">
          <h3>Permission's List</h3>
          <router-link class="btn btn-primary" to="/permissions/add">Add New</router-link>
        </div>
        <div v-if="data.length > 0">
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

        <div v-else class="mb-3 mt-3 text-center">
          <p>There aren't any permission to show.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

function onHttpError() {
  this.$toasted.show(`Sorry, something bad happened, please try again.`)
}
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
      this.$swal({
        title: `Do you really want to delete this permission?`,
        showCancelButton: true,
      }).then((res) => {
        if (res.isConfirmed) {
          axios
            .delete("https://localhost:5001/api/Permissions/" + id)
            .then(() => {
              this.$toasted.info('Permission deleted')
              this.data.splice(index, 1);
            })
            .catch(() => {
              onHttpError();
            });
        }
      });
    },
  },
  mounted() {
    axios
      .get("https://localhost:5001/api/Permissions")
      .then((response) => (this.data = response.data))
      .catch(() => {
        onHttpError();
      });
  },
};
</script>