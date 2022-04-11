<template>
<div class="wrapper-input">
  <input @input="inputValue" :value="modelValue" class="custom-input" placeholder="Price, from">
  <span v-if="!isValid" class="custom-input__error">{{errorMessage}}</span>
</div>
    
</template>

<script>
    export default {
        name: 'CustomInput',
        data() {
          return {
            isValid: true
          }
        },
         props: {
          modelValue: [String, Number],
          // value: {
          //   type: String,
          //   default: ''
          // },
          // errorMessage: {
          //   type: String,
          //   default: ''
          // },
          // rules: {
          //   type: Array,
          //   default: () => []
          // }
        },
        methods: {
          inputValue(e) {
            this.$emit('update:modelValue', e.target.value)
          },
          // validate(value) {
          //   this.isValid = this.rules.every(rule => rule(value))
          // }
        },
        // watch: {
        //   value(modelValue) {
        //     this.validate(modelValue)
        //     console.log(modelValue)
        //   }
        // }
    }
    
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
.wrapper-input {
  position: relative;
  display: inline-flex;
}
.custom-input {
  height: 40px;
//   width: 100%;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  line-height: inherit;
  padding: 8px 15px;
  &::placeholder {
    color: inherit;
  }
  &--error {
    border-color: red;
  }
  &__error {
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    font-size: 12px;
    color: red;
    line-height: 1.3;
  }
}
</style>