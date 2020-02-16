<template>
  <v-footer
    absolute
    color="primary"
    app
    class="elevation-12"
    height="88"
  >
    <v-container
      class="py-0"
      fluid
    >
      <v-row
        align="center"
        class="fill-height"
        justify="start"
      >
        <div class="hidden-xs-only">
          <v-img
            v-if="$vuetify.theme.dark"
            class="shrink"
            contain
            max-width="55px"
            src="/static/Logo-Light.png"
          />
          <v-img
            v-else
            class="shrink"
            contain
            max-width="55px"
            src="/static/Logo-Dark.png"
          />
        </div>
        <v-spacer class="hidden-xs-only" />
        <div class="caption pr-md-12">
          &copy;{{ new Date().getFullYear() }}. All rights reserved
        </div>
        <v-spacer />
        <v-btn
          class="mr-10"
          text
          aria-label="Impressum"
          rounded
          @click="showImmpressum=true"
        >
          Impressum
        </v-btn>
        <impressum v-model="showImmpressum" />
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
  import Impressum from '../../views/Impressum'
  export default {
    components: { Impressum },
    data: () => ({
      showImmpressum: false
    })
  }
</script>
