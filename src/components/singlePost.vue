<template>
    <div>
        <img class="fit-picture" src="../assets/logo.png">
    </div>
    <p>{{ post.content }} </p>
    <p>{{ post.title }} </p>
    <p>{{ post.name }} </p>
    <p>{{ post.desc }} </p>
</template>
<script>
    export default {
        name: 'singlePost',
        data() {
            return {
                post: this.$store.state.blogs[this.$route.params.id]
            }
        }
    }
</script>
<style scoped>


</style>