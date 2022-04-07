<template>
    <div v-if="isVisible">
        <h1 v-show="false">I'm visible</h1>
        <ul>
            <template v-for="fruit in fruits">
                <li v-if="fruit === 'banana'" :key="fruit">{{fruit }}</li>
            </template>
            
        </ul>
        <ul>
            <li v-for="car in cars" :key="car.color">{{car.color }}</li>
        </ul>
         <ul>
            <li v-for="(car, key) in cars" :key="key">{{key }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'DirectivesTest',
        data() {
            return {
                isVisible: true,
                fruits: ['apple', 'banana', 'kiwi'],
                cars: {
                    bmw: {
                        color: 'red'
                    },
                    audi: {
                        color: 'blue'
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>