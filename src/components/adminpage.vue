<template>
    <div>
        <router-link to="/admin/createpost">Crée une page</router-link>
    </div>
</template>
<script>
    export default {
        name: 'adminpage',
    }
</script>
<style scoped>
    /*Style nav / button / footer*/
    div {
        display: flex;
        justify-content: flex-end;
        max-width: 80%;
    }

    button {
        font-size: 20px;

    }
    div a {
        text-decoration: none;
        color: black;
        }
</style>