<template>
  <section
    id="demo"
    class="py-5 primary darken-2 white--text"
  >
    <v-container>
      <v-row
        align="center"
        class="text-md-left text-center"
        justify="center"
      >
        <h3 class="headline font-weight-light ">
          {{ $t('github.text') }}
        </h3>

        <v-spacer class="hidden-sm-and-down" />

        <v-btn
          class="my-3"
          href="https://github.com/allesvergeben/laurindoerre.de"
          large
          min-width="128"
          rounded
          target="_blank"
        >
          <v-avatar
            size="20"
            tile
            style="margin-right: 9px"
          >
            <img
              src="../../assets/GitHub.png"
              alt="Logo"
            >
          </v-avatar>GitHub
        </v-btn>
      </v-row>
    </v-container>
  </section>
</template>
