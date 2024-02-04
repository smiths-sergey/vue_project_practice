<template>
    <div
        :class="{
            product__list_main: type == 'main',
            product__list_basket: type == 'basket',
        }"
    >
        <div class="wrapper">
            <Card
                img-file-name="image1.png"
                name="Устрицы по рокфеллеровски"
                description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры "
                price="2 700 ₽"
                :type="type"
            />
            <Card
                img-file-name="image2.png"
                name="Устрицы по рокфеллеровски"
                description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры "
                price="1600 ₽"
                :type="type"
            />
            <Card
                img-file-name="image3.png"
                name="Креветки по-королевски в лимонном соке"
                description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу "
                price="1 820 ₽"
                :type="type"
            />
            <template v-if="type == 'main'">
                <Card
                    img-file-name="image1.png"
                    name="Устрицы по рокфеллеровски"
                    description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры "
                    price="2 700 ₽"
                    :type="type"
                />
                <Card
                    img-file-name="image1.png"
                    name="Устрицы по рокфеллеровски"
                    description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры "
                    price="2 700 ₽"
                    :type="type"
                />
                <Card
                    img-file-name="image2.png"
                    name="Устрицы по рокфеллеровски"
                    description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры "
                    price="1600 ₽"
                    :type="type"
                />
                <Card
                    img-file-name="image3.png"
                    name="Креветки по-королевски в лимонном соке"
                    description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу "
                    price="1 820 ₽"
                    :type="type"
                />
                <Card
                    img-file-name="image1.png"
                    name="Устрицы по рокфеллеровски"
                    description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры "
                    price="2 700 ₽"
                    :type="type"
                />
            </template>
        </div>
    </div>
</template>

<script>
import Card from '@/components/elements/CardProduct.vue';
export default {
    name: 'ProductList',
    components: {
        Card,
    },
    props: {
        type: {
            type: String,
            default: 'main',
        },
    },
};
</script>

<style lang="scss" scoped>
.product__list_main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 30px;
    padding: 40px;
    .wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 20px;
        max-width: 1440px;
        min-width: 900px;
    }
}

.product__list_basket {
    display: flex;
    justify-content: center;
    min-width: 900px;

    .wrapper {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        gap: 35px;
    }
}
</style>
