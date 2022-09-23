<template>
  <v-container class="d-flex flex-column align-center" xs="10" sm="10" md="8" lg="8" xl="8">

    <v-icon class="arrowAnimation mt-5 mb-5" @click="goAboutMe()">mdi-arrow-up-bold</v-icon>
    <v-carousel align="center" class="mt-5 mb-5" height="80%">
      <v-carousel-item v-for="(slide, index) in slides" :key="slide">
        <v-hover v-slot="{ hover }">
          <v-card class="mx-auto mb-5" color="white lighten-4" width="80%">
            <v-img class="my-auto" :src="slides[index].image">
              <v-expand-transition>
                <div v-if="hover"
                  class="d-flex flex-column transition-fast-in-fast-out white darken-2 v-card--reveal px-2 black--text"
                  style="height: 50%;">
                  <h2>{{ slides[index].title }}</h2>
                  <p>{{ slides[index].description }}</p>
                </div>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>
      </v-carousel-item>
    </v-carousel>
    <v-icon class="arrowAnimation mt-5 mb-5" @click="goHome()">mdi-arrow-down-bold</v-icon>

    <v-icon class="arrowAnimation mt-5 mb-5" @click="goAboutMe()">mdi-arrow-up-bold</v-icon>
    <v-row class="nowrap justify-center">
      <v-icon class="arrowAnimation my-auto" @click="index = (index - 1 + slides.length) % slides.length">mdi-arrow-left-bold</v-icon>
      <v-col cols="6" v-if="slides[index]" class="mx-5">
        <v-hover v-slot="{ hover }">
          <v-card class="mb-5" color="white lighten-4">
            <v-img :src="slides[index].image">
              <v-expand-transition>
                <div v-if="hover"
                  class="d-flex flex-column transition-fast-in-fast-out white darken-2 v-card--reveal px-2 black--text"
                  style="height: 50%;">
                  <h2>{{ slides[index].title }}</h2>
                  <p>{{ slides[index].description }}</p>
                </div>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
      <span v-else>Rien à la position {{ index }}</span>
      <v-icon class="arrowAnimation my-auto" @click="index = (index + 1) % slides.length">mdi-arrow-right-bold</v-icon>
    </v-row>
    <v-icon class="arrowAnimation mt-5 mb-5" @click="goHome()">mdi-arrow-down-bold</v-icon>

  </v-container>
</template>

<script>
import projet1 from "../assets/Projet1.jpg"
import projet2 from "../assets/Projet2.jpg"
import projet3 from "../assets/Projet3.jpg"
import projet4 from "../assets/Projet4.jpg"
import projet5 from "../assets/Projet5.jpg"
// import { compile } from "vue/types/umd";


export default {
  data() {
    return {
      slides: [
        // compile(`<v-hover v-slot="{ hover }">
        //   <v-card class="mx-auto mb-5" color="white lighten-4" width="80%">
        //     <v-img class="my-auto" src="${projet1}">
        //       <v-expand-transition>
        //         <div v-if="hover"
        //           class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal text-h4 px-2 black--text"
        //           style="height: 100%;">
        //           Ceci est mon premier projet, faire un site web en HTML et CSS à partir d'une maquette
        //         </div>
        //       </v-expand-transition>
        //     </v-img>
        //   </v-card>
        // </v-hover>`),
        { image: projet1, title: "RESERVIA", description: "Ceci est mon premier projet, faire un site web en HTML et CSS à partir d'une maquette" },
        { image: projet2, title: "OHMYFOOD", description: "" },
        { image: projet3, title: "LA CHOUETTE AGENCE", description: "Ceci blabla" },
        { image: projet4, title: "ORINOCO", description: "Ceci blabla" },
        { image: projet5, title: "GROUPOMANIA", description: "Ceci blabla"}
      ],
      index: 0
    };
  },
  methods: {
    goHome() {
      this.$router.push({ name: "Home" });
    },
    goAboutMe() {
      this.$router.push({ name: "AboutMe" });
    },
  },
}
</script>

<style>
img {
  width: 80%;
  justify-content: center;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .9;
  position: absolute;
  width: 100%;
}

.wrapper {
  position: relative;
}

.boite-tirets {
  position: relative;
  z-index: 1;
  border: dashed;
  height: 8em;
  margin-bottom: 1em;
  margin-top: 2em;
}

.boite-doree {
  position: absolute;
  z-index: -1;
  /* place .boite-doree au-dessus de .boite-verte et .boite-tirets */
  background: gold;
  width: 80%;
  left: 60px;
  top: 3em;
}

.boite-verte {
  position: absolute;
  z-index: -1;
  /* place .boite-verte au-dessus de .boite-tirets */
  background: lightgreen;
  width: 20%;
  left: 65%;
  top: -25px;
  height: 7em;
  opacity: 0.9;
}
</style>