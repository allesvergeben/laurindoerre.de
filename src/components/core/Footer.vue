<template>
  <v-footer
    absolute
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
        <div>
          <v-img src="/static/LND-Consulting-Long-Logo-Dark-LowRes.png" />
        </div>
        <v-spacer />
        <div class="caption pr-md-12">
          &copy;{{ new Date().getFullYear() }}. All rights reserved
        </div>
        <v-spacer />
        <v-btn
          class="mr-10"
          text
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
