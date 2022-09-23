<template>
	<v-app>
		<headerTop />
		<v-main>
			<router-view />
		</v-main>
		<footerBottom />
	</v-app>
</template>

<script>
import headerTop from "@/components/header";
import footerBottom from "@/components/footer";
export default {
	name: "App",
	components: {
		headerTop,
		footerBottom,
	},
};
</script>

<style>
</style>


