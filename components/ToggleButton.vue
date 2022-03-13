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
  name: "ToggleButton",
  props: "toggle",

  computed: {
    toggleOn: function (event) {
      const toggleSituation = event.target.value;

      this.buttonToggled = !this.buttonToggled;
      if ((this.buttonToggle = true)) {
        this.visible = true;
      } else {
        this.visible = false;
      }
      this.$emit("checking-toggle", toggleSituation);
    },
  },

  // data() {
  // 	return {
  // 		buttonToggled: false,
  // 	};
  // }, //end Data

  methods: {}, //end Methods
}; //end Default
</script>

<style></style>
