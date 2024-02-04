<template>
    <div class="busket">
        <HeaderBlock type="basket" text="КОРЗИНА С ВЫБРАННЫМИ ТОВРАМИ" />
        <ProductList type="basket" />
    </div>
    <footer class="footer">
        <div class="content">
            <div class="order-sum">
                <p class="name">ЗАКАЗ НА СУММУ:</p>
                <p class="sum">{{ sumBusket.toLocaleString() + ' ₽' }}</p>
            </div>
            <Button type="basket" text="Оформить заказ"></Button>
        </div>
    </footer>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
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
        const store = useStore();
        const sumBusket = computed(() => {
            return store.getters.getAllPricePoductsInBasket;
        });

        return {
            sumBusket,
        };
    },
};
</script>

<style lang="scss" scoped>
.busket {
    height: calc(100vh - 90px);
    overflow-y: auto;
    overflow-x: hidden;
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
