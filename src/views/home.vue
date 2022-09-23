<template>
  <v-container pa-0 class="d-flex align-center page-container" fluid>
    <v-row class="text-center">
      <darkHome/>
      <lightHome/>      
        <v-col class="ma-auto textDisplay col-md-5 col-sm-8 col-xs-11">
          <h1 class="font-weight-bold ma-3">
            <span class="firstName">Yann</span><br/><span class="familyName">Thouanel</span>
          </h1>
          <p class="font-weight-regular">
            Je suis un Développeur Web Junior basé à Paris, avec une forte soif d'apprendre et de me challenger
          </p>
          <p class="font-weight-regular">
            N'hésitez pas à me contacter si vous recherchez un développeur sérieux et dévoué !
          </p>
        </v-col>
        <v-col class="align-self-right" cols="12">
            <v-icon class="arrowAnimation"
            @click="goToAboutMe()">mdi-arrow-down-bold</v-icon>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import darkHome from './darkHome'
import lightHome from './lightHome'
export default {
	name: "Home",
	components: {
		darkHome,
		lightHome
	},
	data: () => ({
      
    }),
    mounted() {
    },
    methods: {
      goToAboutMe() {
        if(this.$router.currentRoute.name !== "AboutMe") {
            this.$router.push({ name: "AboutMe" })
        }
    },
    }
};
</script>

<style lang="scss">
@import "../scss/style.scss";
</style>
