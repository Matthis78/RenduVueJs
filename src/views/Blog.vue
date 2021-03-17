<template>
    <div class="center">
    <allposts></allposts>
    </div>
</template>
<script>
    import allposts from '../components/allposts'
    export default {
        components: {
            allposts,
        },
        name: "blog",


    }
</script>
<style scoped>
.center {
    display: table;
    margin: 0 auto;
}


</style>