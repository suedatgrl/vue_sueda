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

            <div>
                <Contact/>    
            </div>

            <div>
                <button 
                    type="button" 
                    class="btn btn-primary me-3"
                    @click="activeComponentTwo = Users"
                >Users</button>

                <button 
                    type="button" 
                    class="btn btn-secondary"
                    @click="activeComponentTwo = AddUsers"
                >Add users</button>

                <component :is="activeComponentTwo"></component>
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
    import Contact from './components/Contact/index.vue'

    import Users from './components/UsersDB/users.vue';
    import AddUsers from './components/UsersDB/addUser.vue';
    
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

    // const activeComponent = shallowRef(Mike);
    const activeComponentTwo = shallowRef(Users);
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
/* .btn {
    border: 1px solid #2196F3; 
    padding: 10px;
    margin: 1%;
} */
</style>