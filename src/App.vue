<template>
    <div>
        <app-header />
        <p>(BurasıApp.vue ilk satırlar: containerın dışı)</p>
        <div class="container">
            <UserProfile :alsoKnownAs="data.name" :userLastname="data.lastname" :userAge="data.age"
                :userParents="data.parents" @update-lastname="data.lastname = $event" @say-hello="alertHello"
                :updateAge="updateAge" />
            <button @click="updateName"> Update name</button>
            <Cars />
            <hr />
            <button @click="updateCar">Update</button>
            <p>(BurasıApp.vue son satırlar ayrıca containerın içi )</p>
            <div>
                <Car_Brands>
                    <template v-slot:Rasgelename_Brands>
                        <ul>
                            <li v-for="(brand, index) in brands" :key="index">
                                {{ brand }}
                            </li>
                        </ul>
                    </template>
                </Car_Brands>
            </div>
        </div>
    </div>
</template>

<script setup>
    const brands = reactive(['Mazda', 'Honda', 'Renault'])
    import UserProfile from './components/User/Profile.vue';
    import { reactive, provide } from 'vue';
    import Cars from './components/Cars/index.vue';
    import Car_Brands from './components/Cars/brands.vue';
    console.log("REACTİVE PART APP.VUE");
    const data = reactive({
        name: 'Rocket',
        lastname: 'Jones',
        age: 28,
        parents: {
            father: 'Mario',
            mother: 'Martha'
        }
    })
    console.log("İN SETUP APP.VUE");
    const updateName = () => {
        data.name = "Golden child"
    }
    const alertHello = () => {
        alert('Hello !!')
    }
    const updateAge = (value) => {
        data.age = value;
    }
    
    //SCRİPT of CARS PART's
    const cars = reactive([
        { model: 'F9', brand: 'Ferrari' },
        { model: '911', brand: 'Porsche' },
        { model: 'Tipo', brand: 'Fiat' }
    ])

    const updateCar = () => {
        cars[0].model = 'Ford'
    }

    provide('cars', {
        cars,
        updateCar
    })
</script>

<style>
body {
    padding: 0;
    margin: 0;
    font-family: 'Robot', sans-serif;
}

.container {
    min-height: 84vh;
    box-sizing: border-box;
    padding: 20px;
}
</style>