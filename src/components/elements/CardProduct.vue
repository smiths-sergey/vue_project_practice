<template>
  <div
    :class="{
      card__main: type == 'main',
      card__basket: type == 'basket',
    }"
    @click="router.push(`/description/${id}`)"
  >
    <div class="card__main-block">
      <img
        class="card__image"
        :src="require('@/assets/' + imgFileName)"
        alt="image"
      />
      <p class="card__title">{{ title }}</p>
      <p v-if="type == 'main'" class="card__description">
        {{ description }}
      </p>
    </div>
    <div class="card__price-block">
      <p class="card__price">{{ price.toLocaleString() + ' ₽' }}</p>
      <ButtonIcon
        class="card_button"
        :type="getTypeButton()"
        @click.stop="onButtonCLick"
      />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import ButtonIcon from '@/components/ui/ButtonIcon.vue';

export default {
  name: 'CardEl',

  components: {
    ButtonIcon,
  },
  props: {
    id: {
      type: Number,
      default: null,
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      default: 0,
    },
    imgFileName: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'main',
    },
  },
  setup(props) {
    const router = useRouter();

    const store = useStore();

    const isInBasket = computed(() => {
      return store.getters.getIsProductInBasket(props.id);
    });

    const getTypeButton = () => {
      if (props.type == 'basket') {
        return 'basket';
      }

      if (isInBasket.value) {
        return 'main_delete';
      } else {
        return 'main_add';
      }
    };

    const onButtonCLick = () => {
      if (isInBasket.value) {
        store.commit('deleteFromBasketProducts', props.id);
      } else {
        store.commit('addToBasketProducts', props.id);
      }
    };

    return {
      router,
      onButtonCLick,
      getTypeButton,
      isInBasket,
    };
  },
};
</script>

<style lang="scss" scoped>
.card__main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border: 1px solid #d58c51;

  width: 312px;
  height: 552px;
  padding: 21px;
  flex-shrink: 0;
  margin-bottom: 15px;
  &:hover {
    color: #d58c51;
    cursor: pointer;
  }

  .card__price-block {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  .card__image {
    width: 270px;
    height: 271.015px;
    margin-bottom: 31px;
    margin-top: 21px;
  }

  .card__title {
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 9px;
  }
  .card__description {
    font-size: 14px;
    font-weight: 400;
  }
}

.card__basket {
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-bottom: 35px;
  &:hover {
    cursor: pointer;
  }
  .card__main-block {
    display: flex;
    align-items: center;
  }
  .card__image {
    width: 132px;
    height: 132px;
    margin-right: 88px;
  }

  .card__title {
    width: 310px;
  }

  .card__price-block {
    display: contents;
  }

  .card__price {
    margin-right: 15px;
    margin-left: 216px;
    color: #d58c51;
  }
  .card_button {
    transform: rotate(45deg);
    color: #d58c51;
    border: 1px solid #d58c51;
  }
}
</style>
