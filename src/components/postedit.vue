<template>
    <div class="container">
        <div>
            <img class="fit-picture" src="../assets/logo.png" alt="test">
        </div>
        <div>
            <p>fyvgbuhjaknzafeazifbafliheakfbafuehfjbafleufjhakbjfelauhfjabkfauhfjab fafjlh dazhifbaf</p>
        </div>
        <div>
            <button class="edit">Editer</button>
            <button class="delete"><i class="fas fa-trash fa-2x"></i></button>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'postedit',
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
        max-width: 80%;
        align-items:center;
        padding: 20px;
        margin-top: 30px;
    }
    .container p {
        max-width: 80%;
    }
    .edit {
        margin-right: 20px;
        font-size: 20px;
    }
</style>