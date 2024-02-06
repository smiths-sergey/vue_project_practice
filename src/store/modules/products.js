import productsData from '@/modules/productsData';
export default {
    state: {
        products: productsData,
        basketProducts: [],
    },
    getters: {
        getAllPricePoductsInBasket: (state) => {
            return state.basketProducts.reduce(
                (total, item) => total + item.price,
                0
            );
        },
        getProducts: (state) => state.products,
        getBasketProducts: (state) => state.basketProducts,
        getCountProductsInBasket: (state) => state.basketProducts.length,
    },
    mutations: {
        addToBasketProducts(state, val) {
            state.basketProducts.push(state.products.find((x) => x.id == val));
        },

        deleteFromBusketProducts(state, val) {
            state.basketProducts.splice(val, 1);
        },
    },
    actions: {},
    modules: {},
};
