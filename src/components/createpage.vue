<template>
    <div>
        <h1>Créer une nouvelle page de blog</h1>
    </div>
    <div class="field">
        <div class="form">

            <label for="name">Titre de la page </label>
            <input v-model="metaName" type="text" name="name" required placeholder="Title">
            <label for="text">Meta title </label>
            <input v-model="metaTitle" type="text" name="text" required placeholder="metaTitle">
            <label for="text">Meta description </label>
            <input v-model="metaDesc" type="text" name="text" required placeholder="metaDescription">
            <label for="text">Corps du post </label>
            <textarea v-model="metaContent" name="singlepost" rows="5" cols="33" placeholder="Corps"></textarea>
            <button @click="createNewPage()">Crée la page</button>
        </div>
        <img @v-model="image">
        <p>Ajouter une image</p>
    </div>

</template>
<script>
    export default {
        name: 'createpage',
        data() {
            return {
                metaName: '',
                metaTitle: '',
                metaDesc: '',
                metaContent: '',
                image: '',
            }
        },
        methods: {
            createNewPage() {
                let post = {
                    name: this.metaName,
                    title: this.metaTitle,
                    desc: this.metaDesc,
                    content: this.metaContent,
                    img: this.image
                }
                this.$store.commit('createNewPage', post)
                this.$router.push('/admin')
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