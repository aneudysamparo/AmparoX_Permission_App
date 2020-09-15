<template>
    <div>
        <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <router-link class="navbar-brand" to="/">
            <strong>PermissionApp</strong>
          </router-link>

          <div class="navbar-nav-scroll">
            <ul class="navbar-nav bd-navbar-nav flex-row">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Dashboard</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/permissions">Permissions</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
</template>
<script>
export default {
        
}
</script>