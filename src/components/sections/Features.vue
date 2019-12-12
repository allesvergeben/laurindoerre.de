<template>
  <section
    id="features"
    class="px-3"
  >
    <section-header
      sub-header="projects"
      text="Some projects I do in my free time alone and together with friends"
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
          >
          </h3>
          <p
            class="body-1 font-weight-light"
            v-html="project.text"
          >
          </p>
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
    data: () => ({
      projects: [
        {
          srcs: ['/static/FreeTimeProjects/FTP_1.png', '/static/FreeTimeProjects/FTP_1.png'],
          header: 'Termine. Einfach.',
          text: 'The aim of the cloud application is the basic coordination of appointments between the person making the ' +
            'appointment and the person taking the appointment, as well as the digitalisation of the procedure. The software ' +
            'can be used in medical practices, schools or public authorities, for example. Here the application at parent-teacher ' +
            'conferences for school purposes as an example. A database (<strong>MySQL</strong>), a web server (<strong>Apache</strong>) ' +
            'and a web service (<strong>REST</strong>) are required as server systems. In addition, there are various user interfaces available.\n'
        },
        {
          srcs: ['/static/FreeTimeProjects/EinfachBot1.jpg', '/static/FreeTimeProjects/EinfachBot2.jpg', '/static/FreeTimeProjects/EinfachBot3.jpg', '/static/FreeTimeProjects/EinfachBot4.jpg'],
          header: 'Bot. Einfach.',
          text: 'The goal was to develop a Discord Bot with which it is possible to see who is currently on which Einfach. game server. ' +
            'If a server crashes, it should be possible for every member of the server to restart the server via Discord. Done was this ' +
            'via <strong>Linux Bash Scripts</strong> for the "server start" commands, <strong>query</strong> for the communication with the ' +
            'game servers and <strong>JavaScript</strong> for the Discord Bot.'
        }
      ]
    })
  }
</script>
