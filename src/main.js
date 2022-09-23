import vue from "vue";
import app from "./app.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

vue.config.productionTip = false;

new vue({
	router,
	vuetify,
	render: (h) => h(app),
}).$mount("#app");