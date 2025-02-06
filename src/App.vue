<template>
    <div>
        <app-header />
        <p>(BurasıApp.vue ilk satırlar: containerın dışı)</p>

        <div class="container">
            <div>
                <UserProfile 
                :alsoKnownAs="data.name" 
                :userLastname="data.lastname" 
                :userAge="data.age"
                :userParents="data.parents" 
                @update-lastname="data.lastname = $event" 
                @say-hello="alertHello"
                :updateAge="updateAge" />
                <button @click="updateName"> Update name</button>
            </div>

            <div>
                <Cars />
                <hr />
                <button @click="updateCar">Update</button>
            </div>

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

            <div>
                <Life v-if="showIt" />
                <hr />
                <button @click="showIt = !showIt">Toggle</button>
            </div>

            <div>
                <h4>Here is the active component things:</h4>
                <button @click="activeComponent = Mike">Mike</button>
                <button @click="activeComponent = Sü">Sü</button>
               
                <component :is="activeComponent"></component>
            </div>

            <div>
                <Directives/>
            </div>
        </div>
    </div>
</template>

<script setup>
    import Directives from '@/components/My_Custom_Directives/custom_index.vue' 
    import { ref, reactive, provide } from 'vue';
    import Life from '@/components/Life/index.vue';
    import UserProfile from './components/User/Profile.vue';
    import Cars from './components/Cars/index.vue';
    import Car_Brands from './components/Cars/brands.vue';
    import Mike from './components/Dynmc_compnnt_my_exmple/Mike.vue'
    import Sü from './components/Dynmc_compnnt_my_exmple/Sü.vue'
    import { shallowRef } from 'vue';

    const showIt = ref(true);

    const brands = reactive(['Mazda', 'Honda', 'Renault'])
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

    const activeComponent = shallowRef(Mike);
</script>

<style>
body {
    padding: 0;
    margin: 0;
    font-family: 'Robot', sans-serif;
}

.container {
    min-height: auto; 
    box-sizing: border-box;
    padding: 20px;
}
</style>