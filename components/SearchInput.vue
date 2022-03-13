<template>
<div>
<input v-on:input="onChange" type="text" />  <!-- v-on = @  LISTENER-->
</div>

</template>

<script>
export default{
name: "SearchInput",

methods: {
    onChange: function(event) {
        //console.log(event.target.value);
        const term = event.target.value
        this.$emit("newTerm", term);
    }
}
};
</script>

<style></style>
