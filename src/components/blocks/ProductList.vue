<template>
  <div
    :class="{
      product__list_main: type == 'main',
      product__list_basket: type == 'basket',
    }"
  >
    <div class="card_wrapper">
      <Card
        v-for="(item, i) in productList"
        :key="i"
        :id="item.id"
        :imgFileName="item.imgFileName"
        :description="item.description"
        :title="item.title"
        :price="item.price"
        :type="type"
      />
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import Card from '@/components/elements/CardProduct.vue';
export default {
  name: 'ProductList',
  components: {
    Card,
  },
  props: {
    type: {
      type: String,
      default: 'main',
    },
  },
  setup(props) {
    const store = useStore();

    const productList = computed(() => {
      if (props.type == 'basket') return store.getters.getBasketProducts;
      return store.getters.getProducts;
    });

    return {
      productList,
    };
  },
};
</script>

<style lang="scss" scoped>
.product__list_main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px;

  .card_wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    max-width: 1440px;
    min-width: 900px;
  }
}

.product__list_basket {
  display: flex;
  justify-content: center;
  min-width: 900px;

  .card_wrapper {
    display: flex;
    flex-direction: column;
    padding-bottom: 35px;
  }
}
</style>
