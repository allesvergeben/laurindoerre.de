<template>
  <v-app>
    <core-app-bar class="font-color" />

    <core-view />

    <core-footer />

    <core-fab />
  </v-app>
</template>

<script>
  export default {
    components: {
      CoreAppBar: () => import('@/components/core/AppBar'),
      CoreFooter: () => import('@/components/core/Footer'),
      CoreFab: () => import('@/components/core/Fab'),
      CoreView: () => import('@/components/core/View')
    }
  }
</script>

<style lang="stylus">
  section
    padding: 64px 16px
    @media screen and (max-width: 640px)
      padding: 16px
</style>
