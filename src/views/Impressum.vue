<template>
  <v-dialog
    v-model="show"
    fullscreen
  >
    <v-app-bar
      dark
      color="primary"
      app
    >
      <v-btn
        icon
        dark
        @click="show = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>Impressum</v-toolbar-title>
      <div class="flex-grow-1"></div>
    </v-app-bar>
    <v-card>
      <v-card-title>
        Logos
      </v-card-title>
      <v-card-text>
        <v-container
          grid-list-xl
          px-0
        >
          <v-row>
            <v-col
              v-for="card in logosrc"
              :key="card.key"
              cols="12"
              sm="12"
              md="6"
              lg="4"
              xl="4"
              style="justify-content: center"
              class="d-flex"
            >
              <v-card
                width="300"
              >
                <v-card-title>
                  {{ card.title }}
                </v-card-title>
                <v-card-subtitle>
                  {{ card.subtitle }}
                </v-card-subtitle>
                <img
                  :src="card.img"
                  :alt="card.title"
                  height="200"
                  class="center"
                >
                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    color="primary"
                    text
                    target="_blank"
                    :href="card.source"
                  >
                    visit
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-title>
        Adobe Stock Photos
      </v-card-title>
      <v-card-text>
        <v-container
          grid-list-xl
          px-0
        >
          <v-row>
            <v-col
              v-for="card in stocksrc"
              :key="card.key"
              cols="12"
              sm="12"
              md="6"
              lg="4"
              xl="4"
              style="justify-content: center"
              class="d-flex"
            >
              <v-card
                width="300"
              >
                <v-card-title>
                  {{ card.title }} by {{ card.author }}
                </v-card-title>
                <v-card-subtitle>
                  {{ card.subtitle }}
                </v-card-subtitle>
                <img
                  :src="card.img"
                  :alt="card.title"
                  height="200"
                  class="center"
                >
                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    color="primary"
                    text
                    target="_blank"
                    :href="card.source"
                  >
                    visit
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header class="title">
              Angaben gemäß § 5 TMG
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>
                Adresse auf Anfrage:<br>
              </p><p>
                <strong>Kontakt:</strong> <br>
                Telefon: 0171-2234360<br>
                E-Mail: <a href="mailto:kontakt@laurindoerre.de">kontakt@laurindoerre.de</a><br>
              </p><p>
                <strong>Haftungsausschluss: </strong><br><br><strong>Haftung für Inhalte</strong><br><br>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.<br><br><strong>Haftung für Links</strong><br><br>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.<br><br><strong>Urheberrecht</strong><br><br>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.<br><br><strong>Datenschutz</strong><br><br>
                Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. <br>
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. <br>
                Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.<br>
              </p><br>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
  export default {
    props: {
      value: Boolean
    },
    data: () => ({
      logosrc: [
        {
          title: 'Javascript Logo',
          subtitle: 'last visit 10.09.2019',
          img: require('@/assets/DevelopmentLogos/JavaScript.png'),
          source: 'https://www.cleanpng.com/png-javascript-web-development-logo-script-clipart-1375846/'
        },
        {
          title: 'VueJS Logo',
          subtitle: 'last visit 10.09.2019',
          img: require('@/assets/DevelopmentLogos/VueJS.png'),
          source: 'https://vuejs.org/images/logo.png'
        },
        {
          title: 'Java Logo',
          subtitle: 'last visit 10.09.2019',
          img: require('@/assets/DevelopmentLogos/Java.png'),
          source: 'https://www.stickpng.com/img/icons-logos-emojis/tech-companies/java-logo'
        },
        {
          title: 'Python Logo',
          subtitle: 'last visit 10.09.2019',
          img: require('@/assets/DevelopmentLogos/Python.png'),
          source: 'https://de.wikipedia.org/wiki/Datei:Python-logo-notext.svg'
        },
        {
          title: 'Dart Logo',
          subtitle: 'last visit 10.09.2019',
          img: require('@/assets/DevelopmentLogos/Dart.png'),
          source: 'https://dart.dev/assets/shared/dart/logo+text/horizontal/white-e71fb382ad5229792cc704b3ee7a88f8013e986d6e34f0956d89c453b454d0a5.svg'
        },
        {
          title: 'Vuetify Logo',
          subtitle: 'last visit 10.09.2019',
          img: require('@/assets/DevelopmentLogos/Vuetify.png'),
          source: 'https://vuetifyjs.com/apple-touch-icon-180x180.png'
        },
        {
          title: 'Flutter Logo',
          subtitle: 'last visit 10.09.2019',
          img: require('@/assets/DevelopmentLogos/Flutter.png'),
          source: 'https://flutter.dev/assets/flutter-lockup-4cb0ee072ab312e59784d9fbf4fb7ad42688a7fdaea1270ccf6bbf4f34b7e03f.svg'
        },
        {
          title: 'WordPress Logo',
          subtitle: 'last visit 10.09.2019',
          img: require('@/assets/DevelopmentLogos/WordPress.png'),
          source: 'http://s.w.org/style/images/wporg-logo.svg'
        },
        {
          title: 'PHP Logo',
          subtitle: 'last visit 10.09.2019',
          img: require('@/assets/DevelopmentLogos/PHP.png'),
          source: 'https://www.php.net/images/logos/new-php-logo.png'
        }
      ],
      stocksrc: [
        {
          title: 'Front-End-Design',
          author: 'Chaosamran_Studio',
          subtitle: 'last visit 10.09.2019',
          img: require('@/assets/Services/Frond-End-Design.jpg'),
          source: 'https://stock.adobe.com/de/252637253'
        },
        {
          title: 'Presentations',
          author: 'kasto',
          subtitle: 'last visit 10.09.2019',
          img: require('@/assets/Services/Presentations.jpg'),
          source: 'https://stock.adobe.com/de/271336521'
        },
        {
          title: 'Video Editing',
          author: 'Milos',
          subtitle: 'last visit 10.09.2019',
          img: require('@/assets/Services/Video-Editing.jpg'),
          source: 'https://stock.adobe.com/de/193401349'
        },
        {
          title: 'SEO/SEA',
          author: 'iLee',
          subtitle: 'last visit 10.09.2019',
          img: require('@/assets/Services/SEO-SEA.jpg'),
          source: 'https://stock.adobe.com/de/239443198'
        },
        {
          title: 'Photo Editing',
          author: 'REDPIXEL',
          subtitle: 'last visit 10.09.2019',
          img: require('@/assets/Services/Photo-Editing.jpg'),
          source: 'https://stock.adobe.com/de/110022573'
        },
        {
          title: 'Coding',
          author: 'joyfotoliakid',
          subtitle: 'last visit 10.09.2019',
          img: require('@/assets/Services/Coding.jpg'),
          source: 'https://stock.adobe.com/de/244435836'
        },
        {
          title: 'Hero - Panda',
          author: 'Cedar',
          subtitle: 'last visit 10.09.2019',
          img: require('@/assets/Services/Coding.jpg'),
          source: 'https://stock.adobe.com/de/211429396'
        }
      ]
    }),
    computed: {
      show: {
        get () {
          return this.value
        },
        set (value) {
          this.$emit('input', value)
        }
      }
    }
  }
</script>
<style lang="stylus">
  a
    text-decoration none
  .center {
    display: block
    margin-left: auto
    margin-right: auto
    max-width 280px
  }
</style>
