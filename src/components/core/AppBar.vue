<template>
  <v-app-bar
    v-scroll="onScroll"
    :flat="!isScrolling"
    color="primary"
    app
  >
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
            <v-icon>
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
      <v-btn
        icon
        @click="setTheme"
      >
        <v-icon>mdi-invert-colors</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
// Utilities
  import { mapMutations } from 'vuex'

  export default {
    data: () => ({
      langs: ['en', 'de'],
      isScrolling: false
    }),
    computed: {
      items () {
        return [
          {
            title: this.$t('button.home'),
            ref: '#home'
          },
          {
            title: this.$t('button.services'),
            ref: '#welcome'
          },
          {
            title: this.$t('button.projects'),
            ref: '#features'
          }

        ]
      }
    },
    beforeCreate () {
      const mq = window.matchMedia('(prefers-color-scheme: dark)')
      mq.addEventListener('change', (e) => {
        this.$vuetify.theme.dark = e.matches
      })
    },
    methods: {
      ...mapMutations(['toggleDrawer']),
      onScroll () {
        this.isScrolling = (window.pageYOffset ||
          document.documentElement.scrollTop || 0) > 25
      },
      setTheme () {
        if (this.$vuetify.theme.dark) {
          return (this.$vuetify.theme.dark = false)
        } else {
          return (this.$vuetify.theme.dark = true)
        }
      }
    }
  }
</script>
