<template>
  <div
    :class="{
      header__main: type == 'main',
      header__basket: type == 'basket',
      header__description: type == 'description',
    }"
  >
    <div class="header__left_block">
      <backIcon v-if="type != 'main'" class="icon_back" @click="goBack" />
      <p v-if="type != 'description'" class="header__name">{{ text }}</p>
    </div>
    <div class="header__right_block">
      <div v-if="type != 'basket'" class="header__chart_info">
        <p>
          {{ countBasket + ' ' + textBasketCount }}
        </p>
        <p>
          {{ 'на сумму ' + sumBasket.toLocaleString() + ' ₽' }}
        </p>
      </div>
      <router-link v-if="type != 'basket'" to="/basket">
        <basketIcon />
      </router-link>
      <Button type="transparent" text="Выйти" @click="unloginUser"></Button>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import Button from '@/components/ui/Button';
import basketIcon from '@/components/icons/busketIcon';
import backIcon from '@/components/icons/backIcon';

export default {
  name: 'HeaderBlock',

  components: {
    Button,
    basketIcon,
    backIcon,
  },
  props: {
    text: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'main',
    },
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const goBack = () => {
      router.go(-1);
    };
    const sumBasket = computed(() => {
      return store.getters.getAllPricePoductsInBasket;
    });

    const countBasket = computed(() => {
      return store.getters.getCountProductsInBasket;
    });

    const textBasketCount = computed(() => {
      if (
        store.getters.getCountProductsInBasket > 10 &&
        store.getters.getCountProductsInBasket < 20
      )
        return 'товаров';
      if (store.getters.getCountProductsInBasket % 10 == 1) return 'товар';
      if ([2, 3, 4].includes(store.getters.getCountProductsInBasket % 10))
        return 'товара';
      return 'товаров';
    });

    const unloginUser = () => {
      store.commit('unloginUser');
      router.push(`/login`);
    };

    return {
      goBack,
      unloginUser,
      sumBasket,
      countBasket,
      textBasketCount,
    };
  },
};
</script>
<style lang="scss" scoped>
.header__main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 40px;
  padding-left: 70px;
  padding-right: 70px;
  padding-top: 50px;
  width: 1440px;

  .header__right_block {
    display: flex;
    gap: 34px;
  }

  .header__chart_info {
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;

    p {
      display: block;
    }
  }
  .header__name {
    font-family: Montserrat;
    font-size: 31px;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
}

.header__basket {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
  padding-top: 50px;

  .header__left_block {
    display: flex;
  }

  .header__name {
    font-family: Montserrat;
    font-size: 31px;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    width: 750px;
  }

  .icon_back {
    margin-right: 63px;
  }
}

.header__description {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 40px;
  padding-top: 50px;
  padding-left: 50px;
  padding-right: 50px;
  width: 100%;
  .header__chart_info {
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;

    p {
      display: block;
    }
  }

  .header__left_block {
    display: flex;
  }
  .header__right_block {
    display: flex;
    gap: 34px;
  }

  .header__name {
    font-family: Montserrat;
    font-size: 31px;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    width: 750px;
  }

  .icon_back {
    margin-right: 63px;
  }
}
</style>
