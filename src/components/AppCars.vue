<template>
    <div id="AppCars">
        <h1>App Cars Vue</h1>
        <table class="table table-striped">
            <thead>
                <th>
                    Brand
                </th>
                <th>
                    Model
                </th>
                <th>
                    Year
                </th>
                <th>
                    Max Speed
                </th>
                <th>
                    Is Automatic
                </th>
                <th>
                    Engine
                </th>
                <th>
                    No. of doors
                </th>
                <th colspan=3>

                </th>
            </thead>
            <tbody>
                <tr v-for="(car, index) in cars" :key="index">
                    <td>
                        {{car.brand}}
                    </td>
                    <td>
                        {{car.model}}
                    </td>
                    <td>
                        {{car.year}}
                    </td>
                    <td>
                        {{car.maxSpeed}}
                    </td>
                    <td>
                        {{car.isAutomatic}}
                    </td>
                    <td>
                        {{car.engine}}
                    </td>
                    <td>
                        {{car.numberOfDoors}}
                    </td>
                    <td>
                        <router-link :to="{ name: 'single-car', params: {id: car.id}}">
                            <button type="button" class="btn btn-info">Show</button>
                        </router-link>
                    </td>
                    <td>
                        <router-link :to="{ name: 'edit-car', params: {id: car.id}}">
                            <button type="button" class="btn btn-warning">Edit</button>
                        </router-link>
                    </td>
                    <td>
                        <button type="button" class="btn btn-danger" @click="deleteCar(car)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <CarDeleted v-if="(this.user)" :deletedCar = 'deletedCar' :user = 'user'/>
    </div>
</template>

<script>
import { cars } from '../services/Cars'
import CarDeleted from '../components/CarDeleted.vue'

export default {
    components: {
        CarDeleted
    },
    data () {
        return {
            cars: [],
            user: '',
            deletedCar: {}
        }
    },
    methods: {
        deleteCar(car) {
            this.user = prompt('Please enter your name')
            this.deletedCar = car
            let index = this.cars.findIndex(single => single.id === car.id)
            cars.deleteCar(car)
            .then((response) => {
                this.cars.splice(index, 1)
            })
            
        }
    },
    created() {
        cars.getAll()
        .then((response) => {
            this.cars = response.data
        })
    },    
    beforeRouteLeave: function(to, from, next) {
        this.user = ''
        next()
    }
}
</script>

<style scoped>
#AppCars {
    margin-top: 2rem;
}
table {
    max-width: 90%;
    margin: 0 auto;
    margin-top: 2rem;
}

</style>


