<template>
    <div id="AddCar">
        <h1 v-if="(!this.$route.params.id)">Add car</h1>
        <h1 v-else>Edit car</h1>
        <form id="addCarForm" @submit.prevent>
            <div class="form-group">
                <label>Brand</label> <br>
                <input  class="form-control" v-model="newCar.brand" type="text" minlength="2" placeholder="brand..." required>
            </div>

            <div class="form-group">
                <label>Model</label> <br>
                <input class="form-control" v-model="newCar.model" type="text" minlength="2" placeholder="model..." required>
            </div>

            <div class="form-group">
                <label>Year</label> <br>
                <select class="form-control" v-model="newCar.year" required>
                    <option disabled value="">Please select year</option>
                    <option v-for="(year, index) in years" :key='index' v-bind:value="year">{{ year }}</option>
                </select>
            </div>

            <div class="form-group">
                <label>Max Speed</label> <br>
                <input class="form-control" v-model="newCar.maxSpeed" type="number" placeholder="max speed...">
            </div>

            <div class="form-group">
                <label>Number of doors</label> <br>
                <input class="form-control" v-model="newCar.numberOfDoors" type="number" placeholder="number of doors..." required>
            </div>

            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="true" value="true" v-model="newCar.isAutomatic">
                <label class="form-check-label" for="true">Automatic</label>
            </div>
            <br><br>

            <label>Engine</label> <br>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="engine" id="electric" value="Electric" v-model="newCar.engine" required>
                <label class="form-check-label" for="electric">Electric</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="engine"  id="petrol" value="Petrol" v-model="newCar.engine" required>
                <label class="form-check-label" for="petrol">Petrol</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="engine"  id="hybrid" value="Hybrid" v-model="newCar.engine" required>
                <label class="form-check-label" for="hybrid">Hybrid</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="engine"  id="diesel" value="Diesel" v-model="newCar.engine" required>
                <label class="form-check-label" for="diesel">Diesel</label>
            </div>
            <br><br>

            <button class="btn btn-success" v-if="(!this.$route.params.id)" @click="addCar(newCar)" type="submit">Add car</button>
            <button class="btn btn-success" v-else @click="edit(newCar)" type="submit">Done</button>
            <button class="btn btn-info" @click="preview(newCar)" type="submit">Preview</button>
            <input class="btn btn-danger" type="reset" value="Reset" />
            <br>
            

        </form><br><br><br>
    </div>
</template>

<script>
import { cars } from '../services/Cars'

export default {
    data () {
        return {
            // title: 'Add car',
            newCar: {},
            years: []
        }
    },
    methods: {
        addCar(newCar) {
            // document.getElementById("addCarForm").reset();
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
        else if(!this.$route.params.id) {
            this.newCar = {};
        }
    },    
    beforeRouteLeave: function(to, from, next) {
        this.newCar = {}
        next()
    } // resets the form and clears object when navigating from edit to add
    
}
</script>

<style scoped>
#AddCar {
    margin-top: 2rem;
}
form {
    max-width: 40%;
    margin: 0 auto;
    margin-top: 2rem;
    text-align: left;
}

button {
    margin-right: 2rem;
}

</style>


