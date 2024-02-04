import { createStore } from 'vuex';

export default createStore({
    state: {
        //countProductsInBasket: 3,
        //allPricePoductsInBasket: 1500,
        products: [
            {
                id: 1,
                title: 'Устрицы по рокфеллеровски',
                description:
                    'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
                price: 2700,
                imgFileName: 'image1.png',
            },
            {
                id: 2,
                title: 'Свиные ребрышки на гриле с зеленью',
                description:
                    'Не следует, однако забывать, что реализация намеченных плановых',
                price: 1600,
                imgFileName: 'image2.png',
            },
            {
                id: 3,
                title: 'Креветки по-королевски в лимонном соке',
                description:
                    'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу',
                price: 1820,
                imgFileName: 'image3.png',
            },
            {
                id: 4,
                title: 'Устрицы по рокфеллеровски',
                description:
                    'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
                price: 2700,
                imgFileName: 'image1.png',
            },
            {
                id: 5,
                title: 'Устрицы по рокфеллеровски',
                description:
                    'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
                price: 2700,
                imgFileName: 'image1.png',
            },
            {
                id: 6,
                title: 'Свиные ребрышки на гриле с зеленью',
                description:
                    'Не следует, однако забывать, что реализация намеченных плановых',
                price: 1600,
                imgFileName: 'image2.png',
            },
            {
                id: 7,
                title: 'Креветки по-королевски в лимонном соке',
                description:
                    'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу',
                price: 1820,
                imgFileName: 'image3.png',
            },
            {
                id: 8,
                title: 'Устрицы по рокфеллеровски',
                description:
                    'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
                price: 2700,
                imgFileName: 'image1.png',
            },
        ],
        basketProducts: [
            {
                id: 1,
                title: 'Устрицы по рокфеллеровски',
                price: 2700,
                imgFileName: 'image1.png',
            },
            {
                id: 2,
                title: 'Креветки по-королевски в лимонном соке',
                price: 1820,
                imgFileName: 'image3.png',
            },
            {
                id: 3,
                title: 'Свиные ребрышки на гриле с зеленью',
                price: 1600,
                imgFileName: 'image2.png',
            },
        ],
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
    mutations: {},
    actions: {},
    modules: {},
});
