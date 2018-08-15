<template>
    <div>
        <h1>Car</h1>
        <table>
            <tr>
                <td>
                    {{ car.brand }}
                </td>
                <td>
                    {{ car.model }}
                </td>
                <td>
                    {{ car.year }}
                </td>
                <td>
                    {{ car.engine }}
                </td>
            </tr>
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

