<template>
  <div>
    <div class="container">
      <AppHeader></AppHeader>
      <main>
        <router-view></router-view>
      </main>

      <AppFooter></AppFooter>
      
    </div>
  </div>
</template>

<script>
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>