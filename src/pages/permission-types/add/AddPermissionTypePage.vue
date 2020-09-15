<template>
  <div class="permission-form">
    <form>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description" v-model="addForm.description" />
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
        description: "",
      },
    };
  },
  methods: {
    onSubmit: function () {

      console.log(this.addForm.description);
    },
  },
};
</script>