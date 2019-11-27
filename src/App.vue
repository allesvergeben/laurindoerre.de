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
          My new homepage isn't finished jet.<br />
          Some pictures aren't correct and a lot of text is incomplete.<br />
          The homepage will be finished on <strong>December 5th</strong>.<br />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            text
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
