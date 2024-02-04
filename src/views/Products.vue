<template>
    <div class="header__wrapper">
        <HeaderBlock type="main" text="Наша продукция" />
    </div>

    <ProductList type="main" />
</template>

<script>
import ProductList from '@/components/blocks/ProductList.vue';
import HeaderBlock from '@/components/blocks/Header.vue';
export default {
    name: 'ProductsPage',

    components: {
        ProductList,
        HeaderBlock,
    },
};
</script>

<style lang="scss" scoped>
.header__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
