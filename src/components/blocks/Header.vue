<template>
    <div
        :class="{
            header__main: type == 'main',
            header__basket: type == 'basket',
        }"
    >
        <div class="header__left_block">
            <backIcon
                v-if="type == 'basket'"
                class="icon_back"
                @click="goBack"
            />
            <p class="header__name">{{ text }}</p>
        </div>
        <div v-if="type == 'main'" class="header__right_block">
            <div class="header__chart_info">
                <p>{{ countBasket + ' ' + textBasketCount }}</p>
                <p>{{ 'на сумму ' + sumBasket.toLocaleString() + ' ₽' }}</p>
            </div>
            <router-link to="/basket">
                <basketIcon />
            </router-link>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import basketIcon from '@/components/icons/busketIcon.vue';
import backIcon from '@/components/icons/backIcon.vue';
import { useRouter } from 'vue-router';
export default {
    name: 'HeaderBlock',

    components: {
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
            if (store.getters.getCountProductsInBasket % 10 == 1)
                return 'товар';
            if ([2, 3, 4].includes(store.getters.getCountProductsInBasket % 10))
                return 'товара';
            return 'товаров';
        });

        return {
            goBack,
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
</style>
