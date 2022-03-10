<template>
	<div id="app">
		{{ message }}

		<div id="button-toggle">
			<VueToggles checked-text="On" unchecked-text="Off" :value="isToggled" @click="isToggled = !isToggled" />
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			message: 'Hello Taisa',
			isToggled: false,
		};
	},
};
</script>

<style>
#app {
	margin-top: 35px;
	font-size: 18px;
	font-family: 'Roboto', sans-serif;
	color: blue;
}
</style>
