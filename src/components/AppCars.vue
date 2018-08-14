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
    max-width: 600px;
    margin: 0 auto;
}
th, td {
    border: 1px solid gray;
    padding: 0.3rem;
}
</style>


