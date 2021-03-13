<template>
    <adminpage></adminpage>
    <div class="center">
    <blogpost></blogpost>
    </div>
</template>
<script>
    import adminpage from '../components/adminpage.vue'
    import blogpost from '../components/blogpost'
    export default {
        components: {
            adminpage,
            blogpost,
        },
        name: "admin",


    }
</script>
<style scoped>
.center {
    display: table;
    margin: 0 auto;
}

</style>