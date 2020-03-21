<template>
    <div class="layout">
        <router-view :key="$route.fullPath"></router-view>
    </div>
</template>

<script>
    export default {
        created() {
            this.$store.dispatch("INIT_STATE");
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .layout {
        margin-top: 50px;
    }
</style>
