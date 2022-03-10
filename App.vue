<template>
	<div id="app">
		{{ message }}

		<div id="button-toggle">
			<VueToggles checked-text="On" unchecked-text="Off" :value="isToggled" @click="isToggled = !isToggled" />
		</div>

		<slide-out dock="right" :visible.sync="visible" title="The title">
			<p>The content</p>
		</slide-out>

		<button @click="visible = true">Show</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			message: 'Hello Taisa',
			isToggled: false,
			visible: false,
		};
	},

	methods: {
		onClosing(e) {
			// prevent close and wait
			e.pause = true;
			// close after 3 seconds
			setTimeout(() => {
				// assign true to close, do nothing or assign false to cancel close.
				e.resume = true;
			}, 3000);
		},
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
