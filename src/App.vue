<template>
  <router-view />
</template>
<script>
import { useStore } from 'vuex';
import { watch } from 'vue';
import 'vue-final-modal/style.css';
export default {
  name: 'App',

  components: {},
  setup() {
    const store = useStore();
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify([]));
    } else {
      store.commit('setStoreUsers');
    }

    watch(
      store.getters.getUsers,
      () => {
        if (
          JSON.stringify(store.getters.getUsers) !=
          localStorage.getItem('users')
        ) {
          localStorage.setItem('users', JSON.stringify(store.getters.getUsers));
        }
      },
      { deep: true }
    );

    if (!localStorage.getItem('authorizedUserLogin')) {
      localStorage.setItem('authorizedUserLogin', '');
    } else {
      store.commit('setAuthorizedUserLogin');
    }
  },
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  font-family: Montserrat;
  background: #161516;
  color: #fff;
  padding-left: calc(50% - 1440px);
  min-height: 100vh;
}
p {
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
}
a {
  text-decoration: none;
}
</style>
