<template>
	<div id="app">
		{{ message }}

		<div id="button-toggle">
			<VueToggles checked-text="Chat On" unchecked-text=" Chat Off" :value="isToggled" @click="toggleChat" />
		</div>

		<div id="side-panel">
			<slide-out dock="right" :visible.sync="visible" title="The title">
				<p>The content</p>
			</slide-out>

			<button @click="visible = true">Show</button>
		</div>

		<div>
			<button v-on:click="warn('Form cannot be submitted yet.', $event)">Submit</button>
		</div>
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
		toggleChat: function (event) {
			this.isToggled = !this.isToggled;
			if (event) {
				this.visible = true;
			}
			//alert(message);
		},
		// onClosing(e) {
		// 	// prevent close and wait
		// 	e.pause = true;
		// 	// close after 3 seconds
		// 	setTimeout(() => {
		// 		// assign true to close, do nothing or assign false to cancel close.
		// 		e.resume = true;
		// 	}, 3000);
		//},
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
