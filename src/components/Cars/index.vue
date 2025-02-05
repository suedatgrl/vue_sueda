<template >
    <div class="indexes">
        <h1>Welcome to cars </h1>
        <p>(Burası Copmonnts>Cars>index.vue)</p>
        <hr/>
        <CarList />
    </div>
    
</template>

<script setup>
    import CarList from './list.vue';
</script>

<style scoped>
    span {
        font-weight: 800;
    }
    .indexes{
        border: 1px solid #2196F3; 
        padding: 10px;
        margin: 1%;
    }
</style>