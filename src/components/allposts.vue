<template>

    <div class="container" v-for="post in allPost" :key="post">

        <div>
            <img class="fit-picture" src="../assets/logo.png">
        </div>
        <div>
            <p>{{ post.desc }} </p>
        </div>
        <router-link :to="{name: 'singlePost', params:{id:post.id}}">Voir plus</router-link>
    </div>
</template>
<script>
    export default {
        name: 'allposts',

        data() {
            return {
                allPost: this.$store.state.blogs,
            }
        },
    }
</script>
<style scoped>
    /*Contenue page admin*/

    .delete {
        width: 50px;
        height: 50px;
        border-radius: 30px;
        outline-style: none;
        cursor: pointer;
        border: none;
        background-color: red;
        color: #fff;
    }

    .container {
        display: flex;
        justify-content: center;
        border: solid grey 1px;
        align-items: center;
        padding: 20px;
        margin-top: 30px;
    }

    p {
        max-width: 300px;
        margin: 30px;
    }
    a {
        text-decoration: none;
        color: black;
    }

    .edit {
        margin-right: 20px;
        font-size: 20px;
    }
</style>