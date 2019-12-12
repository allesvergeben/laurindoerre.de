<template>
  <v-app>
    <core-app-bar class="font-color" />

    <core-view />

    <core-footer />

    <core-fab />

    <v-dialog
      v-model="construction"
      width="450"
    >
      <v-card>
        <v-card-title>unter construction</v-card-title>
        <v-card-text>
          My new homepage is work in progress and will be updated until end of <strong>January 2020</strong>.
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            text
            aria-label="close"
            @click="construction = false"
          >
            close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
  export default {
    components: {
      CoreAppBar: () => import('@/components/core/AppBar'),
      CoreFooter: () => import('@/components/core/Footer'),
      CoreFab: () => import('@/components/core/Fab'),
      CoreView: () => import('@/components/core/View')
    },
    data: () => ({
      construction: true
    })
  }
</script>

<style lang="stylus">
  section
    padding: 64px 16px
    @media screen and (max-width: 640px)
      padding: 16px
</style>
