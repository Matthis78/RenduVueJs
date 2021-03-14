<template>

    <div class="container" v-for="post in allPost" :key="post">

        <div>
            <img class="fit-picture" :src="post.img || '../assets/vuejs.png'">
        </div>
        <div>
            <p>{{ post.content }} </p>
            <p>{{ post.title }} </p>
            <p>{{ post.name }} </p>
            <p>{{ post.desc }} </p>
        </div>
        <div>
            <button class="delete" @remove="removeItems"><i class="fas fa-trash fa-2x"></i></button>
        </div>
        <editpost :id="post.id"></editpost>
    </div>
</template>
<script>
import editpost from '@/components/editpost.vue'
    export default {
        name: 'blogpost',

        data() {
            return {
                allPost: this.$store.state.blogs,
            }
        },
        methods: {
            
            
        },
        components : {
            editpost,
        }
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