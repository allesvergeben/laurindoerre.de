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
      projects: [
        {
          srcs: [require('@/assets/FreeTimeProjects/FTP_1.png'), require('@/assets/FreeTimeProjects/FTP_1.png')],
          header: projects.$t('projects.termine.header'),
          text: projects.$t('projects.termine.text_html')
        },
        {
          srcs: [require('@/assets/FreeTimeProjects/EinfachBot1.jpg'), require('@/assets/FreeTimeProjects/EinfachBot2.jpg'), require('@/assets/FreeTimeProjects/EinfachBot3.jpg'), require('@/assets/FreeTimeProjects/EinfachBot4.jpg')],
          header: projects.$t('projects.bot.header'),
          text: projects.$t('projects.bot.text_html')
        }
      ]
    })
  }
</script>
