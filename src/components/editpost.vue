<template>
    <button class="edit" @click="edit()"> editer</button>
    <div class="field" :style="{display: show}">
        <div class="form">

            <label for="text">Meta title </label>
            <input v-model="metaTitle" type="text" name="text" required placeholder="metaTitle">
            <label for="text">Meta description </label>
            <input v-model="metaDesc" type="text" name="text" required placeholder="metaDescription">
            <label for="text">Corps du post </label>
            <textarea v-model="metaContent" name="singlepost" rows="5" cols="33" placeholder="Corps"></textarea>
            <button @click="editPage(id)">Editer la page </button>
        </div>
        <img @v-model="image">
        <p>Ajouter une image</p>
    </div>

</template>
<script>
    export default {
        name: 'editpost',
        props: ['id'],
        data() {
            return {
                metaName: '',
                metaTitle: '',
                metaDesc: '',
                metaContent: '',
                image: '',
                show: 'none',

            }
        },
        methods: {
            editPage(id) {
                let post = {
                    name: this.metaName,
                    title: this.metaTitle,
                    desc: this.metaDesc,
                    content: this.metaContent,
                    img: this.image,
                    id: id
                }
                this.$store.commit('updatePost', post);
            },
            edit() {


                if (this.show === 'none') {
                    this.show = 'block';
                } else {
                    this.show = 'none';
                }

            }

        }
    }
</script>
<style scoped>
    /*Createpost*/

    .field {
        display: flex;
        justify-content: center;
        margin-top: 10vh;
    }



    label,
    input {
        display: flex;
        margin-bottom: 10px;
    }

    label {
        padding-right: 10px;
    }

    .form {
        margin-right: 30vh;
    }

    textarea {
        max-width: 100%;
    }
</style>