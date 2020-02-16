<template>
  <v-img
    v-if="namespace"
    height="100vh"
    src="/static/home-jumbotron.jpg"
    class="white--text"
    gradient="to top, rgba(13, 3, 29, .85), rgba(25, 25, 38, .85)"
  >
    <v-container fill-height>
      <v-row
        align="center"
        class="pt-5 px-3"
      >
        <v-sheet
          color="transparent"
          dark
          max-width="500"
        >
          <h1
            class="mb-4"
            :class="$vuetify.breakpoint.mdAndUp ? 'display-2' : 'display-1'"
          >
            {{ $t('hero.title') }}
          </h1>

          <p class="title font-weight-light">
            {{ $t('hero.description') }}
          </p>

          <div class="py-4" />

          <v-row
            class="ma-0"
            justify="center"
            justify-md="start"
          >
            <v-btn
              class="mr-sm-3 my-2"
              color="white"
              href="#pricing"
              large
              min-width="175"
              outlined
              rounded
              @click.prevent="$vuetify.goTo('#welcome')"
            >
              {{ $t('button.learnmore') }}
            </v-btn>

            <v-btn
              class="text--primary my-2"
              color="white"
              href="mailto:kontakt@laurindoerre.de?subject=Contact%20via%20Homepage&amp;body=Dear%20Mr%20Dörre,%0D%0A%0D%0A"
              large
              min-width="175"
              rounded
            >
              <span style="color: black">{{ $t('button.contact') }}</span>
            </v-btn>
          </v-row>
        </v-sheet>
      </v-row>
    </v-container>
  </v-img>
</template>

<script>
  export default {
    computed: {
      namespace () {
        return this.$route.name
      }
    }
  }
</script>
