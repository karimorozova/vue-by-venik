<template>
    <main class="apartment-page">
        <MyContainer>
            <div class="apartment-page__content">
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
  import apartments from '@/components/apartment/apartments.js'
  import ApartmentsMainInfo from '@/components/apartment/ApartmentsMainInfo.vue'
  import ApartmentsOwner from '@/components/apartment/ApartmentsOwner.vue'
  import ReviewsComponent from '@/components/reviews'
  import reviewsList from '@/components/reviews/reviews.json'
    export default {
        name: 'ApartmentPage',
        components: {
            MyContainer,
            ApartmentsMainInfo,
            ApartmentsOwner,
            ReviewsComponent,
            
        },
        // data() {
        //     return {
        //         reviewsList
        //     }
        // },
        computed: {
            reviewsList() {
                return reviewsList
            },
            apartment() {
                return apartments.find(apartment => apartment.id === this.$route.params.id)
            }
        },
        mounted() {
            console.log(this.apartment);
        }
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