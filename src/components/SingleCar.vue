<template>
    <div id="SingleCar">
        <h1>Single car view</h1>
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
            </thead>
            <tbody>
                <tr>
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
            id: this.$route.params.id,
            car: {}
        }
    },
    methods: {

    },
    created() {
        cars.getCar(this.id)
        .then((response) => {
            this.car = response.data
        })
        .catch(err => console.log(err))
    }
}
</script>

<style scoped>
#SingleCar {
    margin-top: 2rem;
}
table {
    max-width: 80%;
    margin: 0 auto;
    margin-top: 2rem;
}
</style>


