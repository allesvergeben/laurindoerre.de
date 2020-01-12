<template>
  <section id="welcome">
    <section-header
      :header="$t('welcome.header')"
      :sub-header="$t('welcome.sub-header')"
      :text="$t('welcome.text')"
    />
    <v-container
      grid-list-xl
      px-0
    >
      <v-row>
        <v-col
          v-for="(service, i) in services"
          :key="i"
          cols="12"
          sm="12"
          md="6"
          lg="4"
          xl="4"
          style="justify-content: center"
          class="d-flex"
        >
          <v-card
            width="500px"
          >
            <v-img
              width="500px"
              fill
              style="overflow: hidden"
              :src="service.img"
              contain
            />

            <v-card-title
              class="title primary--text"
              v-text="service.name"
            />

            <v-divider class="ma-2" />
            <v-card-text>{{ service.body }} <br> {{ service.body2 }}</v-card-text>
            <v-expansion-panels
              v-if="service.name==='Development'"
              class="elevation-0"
              multiple
              accordion
            >
              <v-expansion-panel
                class="elevation-0"
              >
                <v-expansion-panel-header style="color: rgba(0, 0, 0, 0.54);  font-size: 14px">
                  {{ $t('welcome.services.development.coding-languages') }}
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-list
                    v-for="(cl, j) in service.codinglanguages"
                    :key="j"
                    class="padding"
                    style="color: rgba(0, 0, 0, 0.54);  font-size: 12px"
                  >
                    <v-list-item class="padding">
                      <v-list-item-avatar
                        size="20"
                        tile
                      >
                        <img
                          :src="cl.image"
                          alt="Logo"
                        >
                      </v-list-item-avatar>
                      {{ cl.name }}
                    </v-list-item>
                  </v-list>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel
                class="elevation-0"
              >
                <v-expansion-panel-header style="color: rgba(0, 0, 0, 0.54);  font-size: 14px">
                  {{ $t('welcome.services.development.frameworks') }}
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-list
                    v-for="(fw, k) in service.frameworks"
                    :key="k"
                    class="padding"
                  >
                    <v-list-item class="padding">
                      <v-list-item-avatar
                        size="20"
                        tile
                      >
                        <img
                          :src="fw.image"
                          alt="Logo"
                        >
                      </v-list-item-avatar>
                      {{ fw.name }}
                    </v-list-item>
                  </v-list>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
  export default {
    data: welcome => ({
      services: [
        {
          name: welcome.$t('welcome.services.front-end-design.name'),
          body: welcome.$t('welcome.services.front-end-design.body'),
          img: require('@/assets/Services/Frond-End-Design.jpg')
        },
        {
          name: welcome.$t('welcome.services.development.name'),
          body: welcome.$t('welcome.services.development.body'),
          codinglanguages: [{ name: 'Javascript', image: require('@/assets/DevelopmentLogos/JavaScript.png') }, { name: 'Vue.js', image: require('@/assets/DevelopmentLogos/VueJS.png') }, { name: 'PHP', image: require('@/assets/DevelopmentLogos/PHP.png') }, { name: 'Java', image: require('@/assets/DevelopmentLogos/Java.png') }, { name: 'Python', image: require('@/assets/DevelopmentLogos/Python.png') }, { name: 'Dart', image: require('@/assets/DevelopmentLogos/Dart.png') }],
          frameworks: [{ name: 'Vuetify', image: require('@/assets/DevelopmentLogos/Vuetify.png') }, { name: 'Flutter', image: require('@/assets/DevelopmentLogos/Flutter.png') }, { name: '"Wordpress"', image: require('@/assets/DevelopmentLogos/WordPress.png') }],
          img: require('@/assets/Services/Coding.jpg')
        },
        {
          name: welcome.$t('welcome.services.seo-sea.name'),
          body: welcome.$t('welcome.services.seo-sea.body'),
          img: require('@/assets/Services/SEO-SEA.jpg')
        },
        {
          name: welcome.$t('welcome.services.presentations.name'),
          body: welcome.$t('welcome.services.presentations.body'),
          body2: welcome.$t('welcome.services.presentations.body2'),
          img: require('@/assets/Services/Presentations.jpg')
        },
        {
          name: welcome.$t('welcome.services.video-editing.name'),
          body: welcome.$t('welcome.services.presentations.body'),
          img: require('@/assets/Services/Video-Editing.jpg')
        },
        {
          name: welcome.$t('welcome.services.photo-editing.name'),
          body: welcome.$t('welcome.services.photo-editing.body'),
          img: require('@/assets/Services/Photo-Editing.jpg')
        }
      ]
    })
  }
</script>

<style lang="stylus">
  .padding
    padding 0
</style>
