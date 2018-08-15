<template>
    <div>
        <h1>{{ title }}</h1>
        <form @submit.prevent>
            <label>Brand</label> <br>
            <input v-model="newCar.brand" type="text" minlength="2" placeholder="brand..." required> <br><br>

            <label>Model</label> <br>
            <input v-model="newCar.model" type="text" minlength="2" placeholder="model..." required> <br><br>

            <label>Year</label> <br>
            <select v-model="newCar.year" required>
                <option disabled value="">Please select year</option>
                <option v-for="(year, index) in years" :key='index' v-bind:value="year">{{ year }}</option>
            </select>
            <br><br>

            <label>Max Speed</label> <br>
            <input v-model="newCar.maxSpeed" type="number" placeholder="max speed..."> <br><br>

            <label>Number of doors</label> <br>
            <input v-model="newCar.numberOfDoors" type="number" placeholder="number of doors..." required> <br><br>

            <input type="checkbox" id="true" value="true" v-model="newCar.isAutomatic">
            <label for="true">Automatic</label> <br><br>

            <label>Engine</label> <br>

            <input type="radio" name="engine" id="electric" value="Electric" v-model="newCar.engine" required>
            <label for="electric">Electric</label>

            <input type="radio" name="engine"  id="petrol" value="Petrol" v-model="newCar.engine" required>
            <label for="petrol">Petrol</label>

            <input type="radio" name="engine"  id="hybrid" value="Hybrid" v-model="newCar.engine" required>
            <label for="hybrid">Hybrid</label>

            <input type="radio" name="engine"  id="diesel" value="Diesel" v-model="newCar.engine" required>
            <label for="diesel">Diesel</label>

            <br><br>

            <button v-if="(!this.$route.params.id)" @click="addCar(newCar)" type="submit">{{ title }}</button>
            <button v-else @click="edit(newCar)" type="submit">Edit car</button>
            <button @click="preview(newCar)" type="submit">Preview</button>
            <input type="reset" value="Reset" />
            <br>
            

        </form><br><br><br>
    </div>
</template>

<script>
import { cars } from '../services/Cars'

export default {
    data () {
        return {
            title: 'Add car',
            newCar: {},
            years: []
        }
    },
    methods: {
        addCar(newCar) {
            if(typeof newCar.isAutomatic === "undefined") {
                newCar.isAutomatic = false;
            }
            cars.add(newCar)
            .then((response) => {
                this.$router.push('cars')
            })
            .catch(err => console.log(err))
            // checks if data is submitted, then redirects route (this way required in inputs works)
        },
        edit(car) {
            cars.edit(car)
            .then((response) => {
                this.$router.push('../cars')
            })
            .catch(err => console.log(err))
        },
        preview(newCar) {
            alert(
                'Brand: '+newCar.brand+'\n'+
                'Model: '+newCar.model+'\n'+
                'Year: '+newCar.year+'\n'+
                'Max Speed: ' +newCar.maxSpeed+'\n'+
                'Number of doors: '+newCar.numberOfDoors+'\n'+
                'Automatic: '+newCar.isAutomatic+'\n'+
                'Engine: '+newCar.engine
            )
        }
    },
    created() {
        for (var i = 1990; i <= 2018; i++) {
            this.years.push(i);
        }
        if(this.$route.params.id) {
            this.title = 'Edit car'
            cars.getCar(this.$route.params.id)
            .then(response => (this.newCar = response.data));
        }
        // console.log(this.$route.params.id)
    },
    beforeRouteLeave: function(to, from, next) {
        this.title = 'Add car'
        next()
    }
    
}
</script>

<style scoped>

form {
    max-width: 80%;
    margin: 0 auto;
    text-align: left;
}
button {
    margin-right: 2rem;
}

</style>


