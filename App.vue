<template>
	<div id="app">


			<ToggleButton :buttonToggled="toggle">

			</ToggleButton>
		</div>



		<div id="side-panel">
				<slide-out dock="right" :visible.sync="visible">
					<div id = "chat-container">
					<!--<p>The content</p>-->
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

				<!--<button @click="visible = true">Show</button>-->
			</div>

		</div>
	</div>
</template>

<script>
import ToggleButton from "./components/ToggleButton.vue"

export default {
	name: "App",
	components: {
		ToggleButton,
	},

	data() {
		return {
			//buttonToggled: false,
			visible: false,
			value: undefined,
            messagesList: [
				{
        		  username: 'John Doe',
         		  message: 'Hey guys! How are you?',
        		  iconUrl: 'https://www.link-to-john-doe-pic.jpg'
			    }
            ]
       }
	},

	methods: {
		toggleOn: function (event) {
			this.buttonToggled = !this.buttonToggled
			if (this.buttonToggle = true) {
				this.visible = true
			} else {
				this.visible = false
			}
	    }
	},
};
</script>

<style>
#app {
	margin-top: px;
	font-size: 18px;
	font-family: 'Roboto', sans-serif;
	color: blue;

#button {
		width:45px;
		float: right;
		/* pura mágica */
		position: absolute;
		top: 50%; /* posiciona na metade da tela */
		margin-top: -25px;
	}

 #footer {
            position: fixed;
            padding: 10px 10px 0px 10px;
            bottom: 0;
            width: 100%;
            /* Height of the footer*/
            height: 40px;
            background: grey;
        }
}
</style>
