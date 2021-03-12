<template>

    <div class="container" v-for="post in allPost" :key="post">

        <div>
            <img class="fit-picture" :src="post.img">
        </div>
        <div>
            <p>{{ post.content }} </p>
        </div>
        <div>
            <button @click="test" class="edit">Editer</button>
            <button class="delete"><i class="fas fa-trash fa-2x"></i></button>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'postedit',

        data() {
            return {
                allPost: this.$store.state.blogs,
            }
        },
        methods: {
            test() {
                console.log(this.allPost);
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

    .p {
        max-width: 80%;
    }

    .edit {
        margin-right: 20px;
        font-size: 20px;
    }
</style>