<template>
<p> {{post.title}} </p>
</template>
<script>
    export default {
        name: 'singlePost',
        data() {
            return{
                post: this.$store.state.blogs[this.$route.params.id]
            }
        }
    }
</script>
<style scoped>

   
</style>