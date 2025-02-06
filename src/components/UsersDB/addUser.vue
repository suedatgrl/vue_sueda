<template>
    <h2>Add users</h2>
    <div class="addUser">
        <div class="form-group mb-3">
            <label>Name</label>
            <input class="form-control" type="text" v-model="user.name">
        </div>

        <div class="form-group mb-3">
            <label>Lastname</label>
            <input class="form-control" type="text" v-model="user.lastname">
        </div>

        <button 
            class="btn btn-primary" 
            @click.prevent="submitForm"
        >Submit</button>
    </div>
</template>

<script setup>
    import { reactive } from 'vue';

    const user = reactive({
        name:'',
        lastname:''
    });

    const submitForm = () => {
        console.log(user);
    }



</script>

<style scoped>
    span {
        font-weight: 800;
    }
    .addUser{
        border: 1px solid #2196F3; 
        padding: 10px;
        margin: 1%;
    }
</style>