<template>
  <v-app-bar
    v-scroll="onScroll"
    :color="!isScrolling ? 'transparent' : 'primary'"
    :flat="!isScrolling"
    app
    dark
  >
    <v-img
      class="shrink"
      contain
      max-width="50%"
      src="/static/LND-Consulting-Long-Logo-Light-LowRes.png"
    />
    <v-spacer />

    <v-toolbar-items>
      <v-btn
        v-for="item in items"
        :key="item.key"
        :aria-label="item.title"
        text
        @click.prevent="$vuetify.goTo(item.ref)"
        class="hidden-xs-only"
      >
        {{ item.title }}
      </v-btn>
      <v-btn
        v-if="isScrolling"
        aria-label="Contact"
        text
        href="mailto:kontakt@laurindoerre.de?subject=Contact%20via%20Homepage&amp;body=Dear%20Mr%20Dörre,%0D%0A%0D%0A"
      >
        Contact
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
// Utilities
  import { mapMutations } from 'vuex'

  export default {
    data: () => ({
      isScrolling: false,
      items: [
        {
          title: 'Home',
          ref: '#home'
        },
        {
          title: 'Welcome',
          ref: '#welcome'
        },
        {
          title: 'Own projects',
          ref: '#features'
        }

      ]
    }),

    methods: {
      ...mapMutations(['toggleDrawer']),
      onScroll () {
        this.isScrolling = (window.pageYOffset ||
          document.documentElement.scrollTop || 0) > 25
      }
    }
  }
</script>
