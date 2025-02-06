<template>
    <div v-awesome:red ="textToRender"></div>
    <div v-awesome:blue ="textToRender"></div>
    <div v-awesome ="'Awesome text of custom index'"></div>
    
</template>

<script setup>
    import {ref} from 'vue';
    const textToRender = ref('Text of customindex')
</script>