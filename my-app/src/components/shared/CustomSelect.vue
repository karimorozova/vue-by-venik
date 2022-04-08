<template>
    <select @change="changeItem" model-value.sync="modelValue" class="custom-select">
    <option 
    v-for="item in formatedItems" 
    :key="item.value" 
    :value="item.value">
    {{item.label}}
    </option>
    </select>
   
</template>

<script>
    export default {
        name: 'CustomSelect',
        props: {
            modelValue: {
            type: String
        },
        items: {
            type: Array,
            default: () => [],
            required: true
        }
        },
        computed: {
            formatedItems() {
                return this.items.map(item => {
                  return  typeof item === 'object' ? item : { value: item, label: item }
                    // if(typeof item === 'object') {
                    //     return item
                    // } else {
                    //     return {
                    //         value: item,
                    //         label: item
                    //     }
                    // }
                })
            }
        },
        methods: {
            changeItem(e) {
                this.$emit('update:modelValue', e.target.value)
            }
        },
    }
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
.custom-select {
  height: 40px;
  max-width: 220px;
  width: 100%;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  padding: 8px 15px;
  cursor: pointer;
  display: inline-block;
}
</style>