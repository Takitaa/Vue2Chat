<template>
	<div class="button" id="button-toggle">
		<VueToggles
			height="30"
			width="90"
			margin="100"
			checked-text="Chat Off"
			unchecked-text=" Chat On"
			:value="buttonToggled"
			@click="toggleOn"
		/>
		<VueToggles
	</div>
</template>

<script>
export default {
	name: 'ToggleButton',
	propos: 'toggle',

	data() {
		return {
			buttonToggled: false,
		};
	}, //end Data

	methods: {
		toggleOn: function (event) {
			this.buttonToggled = !this.buttonToggled;
			if ((this.buttonToggle = true)) {
				this.visible = true;
			} else {
				this.visible = false;
			}
		},
	}, //end Methods
}; //end Default
</script>

<style></style>
