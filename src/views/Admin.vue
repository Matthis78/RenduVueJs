<template>
    <adminpage></adminpage>
    <div class="center">
    <postedit></postedit>
    </div>
</template>
<script>
    import adminpage from '../components/adminpage.vue'
    import postedit from '../components/postedit'
    export default {
        components: {
            adminpage,
            postedit,
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