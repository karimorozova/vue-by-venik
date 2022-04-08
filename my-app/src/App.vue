<template>
 <div :id="$style.app">
   <h2>{{text}}</h2>
   <!-- <input type="text" v-model="text">  -->
   <ApartmentFilterForm @submit="filter"/>
   <!-- <CustomInput v-model="text" />
   <CustomSelect v-model="selectedSort" :items="['kiwi', 'tomato', 'teal']" /> -->
    <p v-if="!filteredApartments.length"> Nothing</p>
   <ApartmentsList v-else :items="filteredApartments">
     <!-- <template v-slot:title>My title</template> -->
     <template v-slot:apartment="{ apartment }">
       <ApartmentsItem
        :key="apartment.id"
        :id="apartment.id"
        :description="apartment.descr"
        :price="apartment.price"
        :rating="apartment.rating"
        :imgSrc="apartment.imgUrl"
        /> 
     </template>
     <!-- <template v-slot:description>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem perferendis minima eos fugit error placeat, laboriosam odio dolores impedit labore tempora, facilis ab dignissimos temporibus veniam. In neque dicta recusandae.</template> -->
   </ApartmentsList>
  
  <!-- <MyButton @click="incrementClicks" :outlined="true">Click me</MyButton> -->
  
  <!-- <StarRating :rating="3.4"/> -->
  <!-- <MyButton @click="incrementClicks" :outlined="true">Click me</MyButton> -->
  <!-- <MyButton @click="incrementClicks" outlined>Click me</MyButton> -->
 </div>
</template>

<script>
// import MyButton from '@/components/MyButton.vue'

// import StarRating from '@/components/StarRating.vue'
import ApartmentsItem from '@/components/apartment/ApartmentsItem'
import ApartmentsList from '@/components/apartment/ApartmentsList.vue'
import apartments from '@/components/apartment/apartments.js'
// import CustomInput from '@/components/shared/CustomInput.vue'
// import CustomSelect from '@/components/shared/CustomSelect.vue'
import ApartmentFilterForm from '@/components/apartment/ApartmentFilterForm.vue'

export default {
  name: 'App',
  components: {
  //  StarRating,
   ApartmentsList,
   ApartmentsItem,
  //  CustomInput,
  //  CustomSelect,
   ApartmentFilterForm
  },
  data() {
    return {
      apartments,
      text: '',
      filters: {
        city: '',
        price: 0,
      },
    }
  },
  computed: {
    filteredApartments() {
      return this.filterByCityName(this.filterByPrice(this.apartments));
    },
  },
  methods: {
    onItemClick() {
      console.log('item clicked');
    },
    filter({ city, price }) {
      this.filters.city = city;
      this.filters.price = price;
      console.log(this.filteredApartments);
    },
    filterByCityName(apartments) {
      if (!this.filters.city) return apartments;
      return apartments.filter((apartment) => {
        return apartment.location.city === this.filters.city;
      });
    },
    filterByPrice(apartments) {
      if (!this.filters.price) return apartments;
      return apartments.filter((apartment) => {
        return apartment.price >= this.filters.price;
      });
    },
  }
}
</script>

<style module>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
