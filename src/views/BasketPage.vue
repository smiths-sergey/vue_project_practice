<template>
  <div class="basket_wrapper">
    <HeaderBlock type="basket" text="КОРЗИНА С ВЫБРАННЫМИ ТОВРАМИ" />
    <ProductList class="product_list" type="basket" />
    <footer class="footer">
      <div class="content">
        <div class="order-sum">
          <p class="name">ЗАКАЗ НА СУММУ:</p>
          <p class="sum">{{ sumBasket.toLocaleString() + ' ₽' }}</p>
        </div>
        <Button
          type="orange"
          text="Оформить заказ"
          @click="onPlaceOrder"
        ></Button>
      </div>
    </footer>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { notification } from 'ant-design-vue';

import HeaderBlock from '@/components/blocks/Header.vue';
import ProductList from '@/components/blocks/ProductList.vue';
import Button from '@/components/ui/Button.vue';
export default {
  name: 'BasketPage',

  components: {
    HeaderBlock,
    ProductList,
    Button,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const sumBasket = computed(() => {
      return store.getters.getAllPricePoductsInBasket;
    });

    const onPlaceOrder = () => {
      const sumBasketLocal = sumBasket.value;
      notification.open({
        description: sumBasket.value
          ? 'Заказ оформлен!'
          : 'Корзина пуста! Заказ оформить невозможно.',
      });
      
      if (sumBasketLocal) {
        store.commit('clearBasket');
        router.push(`/`);
      }
    };

    return {
      onPlaceOrder,
      sumBasket,
    };
  },
};
</script>

<style lang="scss" scoped>
.basket_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh);
}

.product_list {
  flex: 1;
  overflow-y: auto;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  left: 0;
  border-top: 1px solid #d58c51;
  padding: 20px;
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 850px;

    .order-sum {
      display: flex;
      .name {
        font-size: 21px;
        margin-right: 16px;
      }
      .sum {
        font-size: 18px;
        color: #d58c51;
      }
    }
  }
}
</style>
