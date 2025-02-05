<template>
    <div class="list ">
        <p>(Burası Copmonnts>Cars>list.vue)</p>
        <ul>
            <li v-for="car in cars" :key="car.model">
                <span>{{ car.brand }}</span>: {{car.model}}
            </li>
        </ul>
        <hr/>
        <button @click="updateCar">Update from child</button>
    </div>
</template>

<script setup>
    import { inject } from 'vue';
    const { cars,updateCar } = inject('cars')
</script>

<style scoped>
    span {
        font-weight: 800;
    }
    .list{
        border: 2px solid #f37521;
        padding: 10px;
        margin: 1%;
    }
</style>