<template>
    <div id="deletedCar" >
        <h3>Car deleted!</h3>
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
                <th>
                    Deleted by
                </th>
            </thead>
            <tbody>
                <tr>
                    <td>
                        {{deletedCar.brand}}
                    </td>
                    <td>
                        {{deletedCar.model}}
                    </td>
                    <td>
                        {{deletedCar.year}}
                    </td>
                    <td>
                        {{deletedCar.maxSpeed}}
                    </td>
                    <td>
                        {{deletedCar.isAutomatic}}
                    </td>
                    <td>
                        {{deletedCar.engine}}
                    </td>
                    <td>
                        {{deletedCar.numberOfDoors}}
                    </td>
                    <td>
                        {{user}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: ['deletedCar', 'user']
}
</script>

<style scoped>
#deletedCar {
    margin-top: 2rem;
}
table {
    max-width: 90%;
    margin: 0 auto;
    margin-top: 2rem;
}
</style>

