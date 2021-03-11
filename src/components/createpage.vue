<template>
    <div>
        <h1>Créer une nouvelle page de blog</h1>
    </div>
    <div class="field">
        <form action="" method="get" class="form">
            <div class="form">
                <label for="name">Titre de la page </label>
                <input @v-model="metaPost" type="text" name="name" id="name" required value="Title">
            </div>
            <div class="form">
                <label for="text">Meta title </label>
                <input @v-model="metaPost" type="text" name="text" id="text" required value="metaTitle">
            </div>
            <div class="form">
                <label for="text">Meta description </label>
                <input @v-model="metaPost" type="text" name="text" id="text" required value="metaDescription">
            </div>
            <div class="form">
                <label for="text">Corps du post </label>
                <textarea @v-model="metaPost" id="singlepost" name="singlepost" rows="5" cols="33" value="Corps"></textarea>
            </div>
            <div class="form">
                <input type="submit" @click="createNewPage()" value="Crée la page">
            </div>
        </form>
        <img @v-model="image">
        <p>Ajouter une image</p>
    </div>

</template>
<script>
    export default {
        name: 'createpage',
        methods: {
            createNewPage(e) {
             this.$store.commit('createNewPage', e.target.Title,e.target.metaTitle,e.target.metaDescription,e.target.Corps)
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

    form.form {
        display: table;
    }

    div.form {
        display: table-row;
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