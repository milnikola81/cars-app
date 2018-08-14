<template>
    <div>
        <h1>Add Car</h1>
        <form @submit.prevent>
            <label>Brand</label> <br>
            <input v-model="newCar.brand" type="text" placeholder="brand..."> <br><br>

            <label>Model</label> <br>
            <input v-model="newCar.model" type="text" placeholder="model..."> <br><br>

            <label>Year</label> <br>
            <select v-model="newCar.year">
                <option disabled value="">Please select year</option>
                <option v-for="(year, index) in years" :key='index' v-bind:value="year">{{ year }}</option>
            </select>
            <br><br>

            <label>Max Speed</label> <br>
            <input v-model="newCar.maxSpeed" type="number" placeholder="max speed..."> <br><br>

            <label>Number of doors</label> <br>
            <input v-model="newCar.numberOfDoors" type="number" placeholder="number of doors..."> <br><br>

            <label>Is automatic</label> <br>
            <input type="checkbox" id="true" value="true" v-model="newCar.isAutomatic">
            <label for="true">Yes</label> <br><br>

            <label>Engine</label> <br>

            <input type="radio" id="electric" value="Electric" v-model="newCar.engine">
            <label for="electric">Electric</label>

            <input type="radio" id="petrol" value="Petrol" v-model="newCar.engine">
            <label for="petrol">Petrol</label>

            <input type="radio" id="hybrid" value="Hybrid" v-model="newCar.engine">
            <label for="hybrid">Hybrid</label>

            <input type="radio" id="diesel" value="Diesel" v-model="newCar.engine">
            <label for="diesel">Diesel</label>

            <br><br>

            <button @click="addCar(newCar)" type="submit">Add car</button>

        </form><br><br><br>
    </div>
</template>

<script>
import { cars } from '../services/Cars'

export default {
    data () {
        return {
            newCar: {},
            years: []
        }
    },
    methods: {
        addCar(newCar) {
            if(typeof newCar.isAutomatic === "undefined") {
                newCar.isAutomatic = false;
            }
            // console.log(newCar.isAutomatic)
            cars.add(newCar)
            this.$router.push('cars')
        }
    },
    created() {
        for (var i = 1990; i <= 2018; i++) {
            this.years.push(i);
        }
    }
    
}
</script>

<style scoped>

form {
    max-width: 600px;
    margin: 0 auto;
    text-align: left;
}

</style>


