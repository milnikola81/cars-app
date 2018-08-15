<template>
    <div>
        <h1>App Cars Vue</h1>
        <table>
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
                    <td style="border:none">
                        <router-link :to="{ name: 'single-car', params: {id: car.id}}">
                            <button type="button" class="btn btn-info">Show</button>
                        </router-link>
                    </td>
                    <td style="border:none">
                        <router-link :to="{ name: 'edit-car', params: {id: car.id}}">
                            <button type="button" class="btn btn-warning">Edit</button>
                        </router-link>
                    </td>
                    <td style="border:none">
                        <button type="button" class="btn btn-danger" @click="deleteCar(car)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { cars } from '../services/Cars'

export default {
    data () {
        return {
            cars: []
        }
    },
    methods: {
        deleteCar(car) {
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
    }
}
</script>

<style scoped>
table {
    max-width: 90%;
    margin: 0 auto;
}
th, td {
    border: 1px solid gray;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}
</style>


