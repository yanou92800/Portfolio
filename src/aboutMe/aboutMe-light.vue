<template>
  <v-col v-if="!$vuetify.theme.dark" cols="12 background-light-about-me">
    <v-icon class="arrowAnimation" @click="goHome()">mdi-arrow-up-bold</v-icon>
    <h1>About Me !</h1>
    <v-icon class="arrowAnimation" @click="goProjects()">mdi-arrow-down-bold</v-icon>
  </v-col>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push({ name: "Home" });
    },
    goProjects() {
      this.$router.push({ name: "Projects" });
    }
  },
}
</script>