<template>
    <div>
        <footer>
        <div class="d-flex justify-content-between">
          <p><strong>PermissionApp</strong></p>
          <p> &copy; {{ year }} - AmparoX </p>
        </div>
      </footer>
    </div>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>