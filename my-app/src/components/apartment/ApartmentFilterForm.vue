<template>
<MyContainer> 
    <form class="form" @submit.prevent="onFormSubmit">
<CustomSelect :items="cities" v-model="city" class="form__select"/>
<CustomInput v-model="price" placeholder="Price, from"/>

<MyButton class="form__submit" type="submit">Order apartment</MyButton>
    </form>
    </MyContainer>
</template>

<script>
import MyContainer from '@/components/shared/MyContainer.vue'
import CustomInput from '@/components/shared/CustomInput.vue'
import CustomSelect from '@/components/shared/CustomSelect.vue'
import MyButton from '@/components/MyButton.vue'
    export default {
        name: 'ApartmentFilterForm',
        components: {
            CustomInput,
            CustomSelect,
            MyButton,
            MyContainer
        },
        data() {
            return {
                
                price: '',
                city: ''
                }
                
            
        },
        computed: {
            cities() {
                return [{ value: '', label: 'City', selected: true }, 'Kyiv', 'Odesa', 'Poltava', 'Kharkiv', 'Dnipro', 'Lviv', 'Kherson', 'Mariupol',]
            }
        },
        methods: {
            onFormSubmit() {
                this.$emit('submit', {
        city: this.city,
        price: this.price,
      });
            }
        },
    }
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  &__select {
    margin-right: 30px;
  }
  &__submit {
    margin-left: auto;
  }
}
</style>