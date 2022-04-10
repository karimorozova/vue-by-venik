<template>
  <main class="home-page">
      <MyContainer>
        <ApartmentFilterForm @submit="filter"/>
      </MyContainer>
      <MyContainer>
    <p v-if="!filteredApartments.length"> Nothing</p>
   <ApartmentsList v-else :items="filteredApartments">
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
       </ApartmentsList>
   </MyContainer>
   
</main>
</template>

<script>
import ApartmentsItem from '@/components/apartment/ApartmentsItem'
import ApartmentsList from '@/components/apartment/ApartmentsList.vue'
// import apartments from '@/components/apartment/apartments.js'
import ApartmentFilterForm from '@/components/apartment/ApartmentFilterForm.vue'
import MyContainer from '@/components/shared/MyContainer.vue'
import { getApartmentsList } from '@/services/apartment.service.js'

export default {
  name: 'HomePage',
  components: {
   ApartmentsList,
   ApartmentsItem,
   MyContainer,
   ApartmentFilterForm
  },
  
  data() {
    return {
      apartments: [],
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
  async created() {
    try {
      const { data } = await getApartmentsList()
      console.log(data)
      this.apartments = data

    } catch(error) {
      console.error(error)
    }
  },
  methods: {
    onItemClick() {
      console.log('item clicked');
    },
    filter({ city, price }) {
      this.filters.city = city;
      this.filters.price = price;
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

<style lang="scss" scoped>

</style>
