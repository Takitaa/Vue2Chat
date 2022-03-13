<template>
	<SearchInput v-on:newTerm="handleNewTerm"></SearchInput>

	</div>
</template>

<script>
import SearchInput from "./components/SearchInput.vue"

export default {
	name: "App",
	components: {
      SearchInput,
	},

    methods:{
        handleNewTerm: function(searchInput) {
          console.log(searchInput);
        }
    }
};
</script>

<style>

</style>
