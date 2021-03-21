<template>
    <div>
        <img class="fit-picture" src="../assets/logo.png">
    </div>
    <p class="titre">{{ post.title }} </p>
    <div class="container">
    <p>{{ post.content }} </p>
    <p>{{ post.desc }} </p>
    </div>
    <div class="metadonne">
     <p>Posté le 3 mars 2021</p>
    <p>{{ post.name }} </p>
    </div>
    
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
.titre{
    margin-bottom: 50px;
}

.container {
    display: block;
    margin: 0 auto;
    max-width: 100vh;
}
.metadonne {
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
}

</style>