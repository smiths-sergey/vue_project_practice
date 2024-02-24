<template>
  <div class="description_page__background">
    <div class="description_page__main-block">
      <HeaderBlock type="description" text="" />
      <div class="card">
        <img
          class="card__image"
          :src="require('@/assets/' + product.imgFileName)"
          width="500"
          alt="image"
        />
        <div>
          <p class="card__title">{{ product.title }}</p>
          <p class="card__description">
            {{ product.description }}
          </p>
          <div class="card__price_block">
            <p class="card__price">
              {{ product.price.toLocaleString() + ' ₽' }}
            </p>
            <Button
              class="button"
              type="orange"
              :text="isInBasket ? 'Удалить из корзины' : 'В корзину'"
              @click="onButtonCLick"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

import HeaderBlock from '@/components/blocks/Header.vue';
import Button from '@/components/ui/Button.vue';

export default {
  name: 'DescriptionPage',

  components: {
    HeaderBlock,
    Button,
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    const product = store.getters.getProduct(route.params.id);

    const isInBasket = computed(() => {
      return store.getters.getIsProductInBasket(product.id);
    });

    const onButtonCLick = () => {
      if (isInBasket.value) {
        store.commit('deleteFromBasketProducts', product.id);
      } else {
        store.commit('addToBasketProducts', product.id);
      }
    };
    return {
      onButtonCLick,
      product,
      isInBasket,
    };
  },
};
</script>

<style lang="scss" scoped>
.description_page__background {
  height: 100vh;
  background-image: url('../assets/desc_page_bgr.png');
  background-size: cover;
  background-repeat: repeat;
}
.description_page__main-block {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 20px;
  max-width: 1440px;
  min-width: 900px;
  margin-left: auto;
  margin-right: auto;
}
.card__image {
  margin-left: 50px;
}
.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-left: 50px;
  padding-right: 50px;
  gap: 20px;
}
.card__price_block {
  display: flex;
}
.card__title {
  font-size: 30px;
  font-weight: 500;
  color: #d58c51;
  width: 415px;
  margin-bottom: 21px;
}
.card__description {
  font-size: 14px;
  font-weight: 400;
  width: 530px;
  margin-bottom: 50px;
}
.card__price {
  font-size: 23px;
  font-weight: 500;
  margin-right: 140px;
}
</style>
