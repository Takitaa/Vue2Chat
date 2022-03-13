<template>
  <div id="side-panel">
    <slide-out dock="right" :visible.sync="visible">
      <div id="chat-container">
        <p>The content</p>
        <bubble-chat
          :position="chatPosition"
          :messages="messagesList"
          :text-field="'message'"
          :sender-name-field="'username'"
          :avatar-link-field="'iconUrl'"
        >
        </bubble-chat>

        <!-- <div id ="footer">
							<input type="text" v-model = "value">
							<button @click = "messageList.push(value)">Submit</button>
						</div> -->
      </div>
    </slide-out>
  </div>
</template>

<script>
export default {
  name: "SlidePanel",
  props: {
    visible: Boolean,
    messagesList: [],
  },
};
</script>

<style></style>
