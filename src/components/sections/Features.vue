<template>
  <section
    id="features"
    class="px-3"
  >
    <section-header
      :sub-header="$t('projects.sub-header')"
      :text="$t('projects.text')"
    />

    <v-container
      :mt-5="$vuetify.breakpoint.mdAndUp"
      :pt-5="$vuetify.breakpoint.mdAndUp"
      px-0
      pb-0
    >
      <v-row
        v-for="(project, j) in projects"
        :key="j"
        :class="[$vuetify.breakpoint.mdAndUp && 'my-5']"
        :style="{flexDirection: $vuetify.breakpoint.mdAndUp && j === 1 ? 'row-reverse' : 'row'}"
      >
        <v-col
          cols="12"
          md="6"
          class="hidden-sm-and-down"
        >
          <v-sheet
            class="mx-auto"
          >
            <v-carousel
              :continuous="false"
              cycle
              show-arrows-on-hover
              hide-delimiters
              height="250px"
            >
              <v-carousel-item
                v-for="(src, k) in project.srcs"
                :key="k"
                :src="src"
              />
            </v-carousel>
          </v-sheet>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <h3
            class="headline font-weight-regular mb-3 mt-2"
            v-html="project.header"
          />
          <p
            class="body-1 font-weight-light"
            v-html="project.text"
          />
          <v-btn
            :href="project.src"
            target="_blank"
          >
            {{ project.button }}
          </v-btn>
        </v-col>
        <v-col
          v-if="j !== project.length - 1"
          cols="12"
          class="py-5 hidden-sm-and-down"
          order-xs="4"
        >
          <v-divider />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
  export default {
    data: projects => ({
    }),
    computed: {
      // TODO json parse and loop directly through the JSON
      projects () {
        return [
          {
            srcs: [require('@/assets/FreeTimeProjects/FTP_1.png'), require('@/assets/FreeTimeProjects/FTP_1.png')],
            header: this.$t('projects.termine.header'),
            text: this.$t('projects.termine.text_html'),
            button: this.$t('button.visit'),
            src: 'https://einfachpunkt.de/'
          },
          {
            srcs: [require('@/assets/FreeTimeProjects/Template1.jpg'), require('@/assets/FreeTimeProjects/Template2.jpg'), require('@/assets/FreeTimeProjects/Template3.jpg')],
            header: this.$t('projects.template.header'),
            text: this.$t('projects.template.text_html'),
            button: this.$t('button.visit'),
            src: 'https://preview.vuetifytemplate.com/'
          }
        ]
      }
    }
  }
</script>
