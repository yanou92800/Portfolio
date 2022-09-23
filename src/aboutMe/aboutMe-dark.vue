<template>
  <v-col v-if="$vuetify.theme.dark" cols="12 background-dark">
    <v-col class="align-self-right" cols="12">
      <v-icon class="arrowAnimation" @click="goHome()">mdi-arrow-up-bold</v-icon>
    </v-col>
    <section class="hero bg-base-200 mb-20 rounded-lg p-5">
      <div class="flex-col hero-content">
        <div class="avatar">
          <div class="w-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://i.ibb.co/WKWmT8Z/IMG-20220512-144649-resized-20220512-025014931.jpg"
              alt="IMG-20220512-144649-resized-20220512-025014931">
          </div>
        </div>
        <div class="items-center text-center">
          <h2 class="text-5xl font-bold mb-4">Yann THOUANEL</h2>
          <h3 class="text-3xl font-bold">Développeur Front-end</h3>
          <p class="py-9 text-xl">📍 Puteaux, Hauts-de-seine</p>
          <div class="flex flex-wrap gap-3 justify-center">
            <span class="badge badge-primary mr-2 hover:bg-primary-focus cursor-pointer">VUE JS</span>
            <span class="badge badge-primary mr-2 hover:bg-primary-focus cursor-pointer">NODE JS</span>
            <span class="badge badge-primary mr-2 hover:bg-primary-focus cursor-pointer">EXPRESS</span>
            <span class="badge badge-primary mr-2 hover:bg-primary-focus cursor-pointer">MYSQL</span>
            <span class="badge badge-primary mr-2 hover:bg-primary-focus cursor-pointer">MONGODB</span>
          </div>
        </div>
      </div>
    </section>
    <div class="stars small"></div>
    <div class="stars medium"></div>
    <div class="stars large"></div>
    <v-col class="align-self-right" cols="12">
      <v-icon class="arrowAnimation" @click="goProjects()">mdi-arrow-down-bold</v-icon>
    </v-col>
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

<style>

.avatar img {
  height: 300px;
  width: 300px;
  border-radius: 30px;
  object-fit: cover;
}

</style>