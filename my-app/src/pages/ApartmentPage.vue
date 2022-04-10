<template>
    <main class="apartment-page">
        <MyContainer>
            <div v-if="apartment" class="apartment-page__content">
              <ApartmentsMainInfo :apartment="apartment" />
              <div class="apartment-page_additional-info">
                  <ApartmentsOwner class="apartment-page__owner" :owner="apartment.owner" />
                  <ReviewsComponent :reviews="reviewsList" />
              </div>
              
            </div>
        </MyContainer>

    </main>
</template>

<script>
  import MyContainer from '@/components/shared/MyContainer.vue'
//   import apartments from '@/components/apartment/apartments.js'
  import ApartmentsMainInfo from '@/components/apartment/ApartmentsMainInfo.vue'
  import ApartmentsOwner from '@/components/apartment/ApartmentsOwner.vue'
  import ReviewsComponent from '@/components/reviews'
  import reviewsList from '@/components/reviews/reviews.json'
  import { getApartmentById } from '@/services/apartment.service.js'
    export default {
        name: 'ApartmentPage',
        components: {
            MyContainer,
            ApartmentsMainInfo,
            ApartmentsOwner,
            ReviewsComponent,
            
        },
        data() {
            return {
                apartment: null
            }
        },
        computed: {
            reviewsList() {
                return reviewsList
            }
        },
        beforeCreate() {
            console.log(this.reviewsList, '-----beforeCreate')
        },
        async created() {
            try {
                const { id } = this.$route.params
                const { data } = await getApartmentById(id)
                console.log(data)
                this.apartment = data

            } catch(error) {
                console.error(error)
            }
        },
        beforeMount() {
            console.log(this.$el, '-----beforeMount')
        },
        mounted() {
            console.log(this.$el, '-----mounted')
        },
        beforeUnmount() {
            console.log(this.$el, '-----beforeUnmount')
        },
        unmounted() {
            console.log(this.$el, '-----unmounted')
        },
        // mounted() {
        //     console.log(this.$route.query.name)
        //     console.log(this.$route.params.id)
        // },
    }
</script>

<style lang="scss" scoped>
    .apartment-page {
        padding-bottom: 60px;
        &__content {
            display: flex;
            align-items: flex-start;
        }
        &__owner {
            min-width: 350px;
            margin-left: 30px;
        }
    }
</style>