<template>
  <div>
    <div class="container">
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <router-link class="navbar-brand" to="/">
            <strong>PermissionApp</strong>
          </router-link>

          <div class="navbar-nav-scroll">
            <ul class="navbar-nav bd-navbar-nav flex-row">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/permissions">Permissions</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/permission-types">Permission Types</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <router-view></router-view>
      </main>

      <footer>
        <div class="d-flex justify-content-between">
          <p><strong>PermissionApp</strong></p>
          <p> &copy; {{ year }} - AmparoX </p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>