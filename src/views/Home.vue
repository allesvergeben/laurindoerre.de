<template>
  <section
    id="home"
    class="pa-0"
  >
    <hero />

    <welcome />

    <git-hub />

    <features />
  </section>
</template>

<script>
  export default {
    metaInfo () {
      return {
        title: 'Home'
      }
    },

    components: {
      GitHub: () => import('@/components/sections/GitHub'),
      Features: () => import('@/components/sections/Features'),
      Hero: () => import('@/components/sections/Hero'),
      Welcome: () => import('@/components/sections/Welcome')
    },

    data: () => ({
      items: ['/static/server-parallax.png']
    }),

    computed: {
      cardFeatures () {
        return []
      },
      listFeatures () {
        return []
      },
      testimonials () {
        return []
      }
    }
  }
</script>
