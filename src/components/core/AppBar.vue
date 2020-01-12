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
        class="hidden-xs-only"
        @click.prevent="$vuetify.goTo(item.ref)"
      >
        {{ item.title }}
      </v-btn>
      <v-btn
        v-if="isScrolling"
        :aria-label="$t('button.contact')"
        text
        href="mailto:kontakt@laurindoerre.de?subject=Contact%20via%20Homepage&amp;body=Dear%20Mr%20Dörre,%0D%0A%0D%0A"
      >
        Contact
      </v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            v-on="on"
          >
            <v-icon
              color="white"
            >
              mdi-web
            </v-icon>
          </v-btn>
        </template>
        <v-list v-model="$i18n.locale">
          <v-list-item
            :disabled="$i18n.locale === 'en'"
            @click="$i18n.locale = 'en'"
          >
            <v-list-item-title>English</v-list-item-title>
          </v-list-item>
          <v-list-item
            :disabled="$i18n.locale === 'de'"
            @click="$i18n.locale = 'de'"
          >
            <v-list-item-title>Deutsch</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
// Utilities
  import { mapMutations } from 'vuex'

  export default {
    data: appbar => ({
      langs: ['en', 'de'],
      isScrolling: false,
      items: [
        {
          title: appbar.$t('button.home'),
          ref: '#home'
        },
        {
          title: appbar.$t('button.services'),
          ref: '#welcome'
        },
        {
          title: appbar.$t('button.projects'),
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
