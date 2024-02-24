<template>
  <div class="wrapper">
    <div class="header__wrapper">
      <HeaderBlock type="main" text="Наша продукция" />
    </div>
    <ProductList class="product_list" type="main" />
  </div>
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
.wrapper {
  display: flex;
  flex-direction: column;
  height: calc(100vh);
}

.product_list {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
}
.header__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
