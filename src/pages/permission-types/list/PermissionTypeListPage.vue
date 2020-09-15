<template>
  <div>
    <div class="row">
      <div class="col">
        <div class="d-flex justify-content-between">
          <h3>List Page</h3>
          <router-link class="btn btn-primary" to="/permission-types/add">Add New</router-link>
        </div>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in data" :key="item.id">
              <th scope="row">{{ item.id}}</th>
              <td>{{ item.description }}</td>
              <td>Edit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
const sampleData = [
  { id: 0, description: "Birthday" },
  { id: 1, description: "Emergency" },
  { id: 2, description: "School" },
];
export default {
  data() {
    return {
      data: sampleData
    };
  },
};
</script>