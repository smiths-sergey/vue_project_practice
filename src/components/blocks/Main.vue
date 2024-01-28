<template>
    <div class="product_list">
        <Card
            img-file-name="image1.png"
            name="Устрицы по рокфеллеровски"
            description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры "
            price="2 700 ₽"
        />
        <Card
            img-file-name="image2.png"
            name="Устрицы по рокфеллеровски"
            description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры "
            price="1600 ₽"
        />
        <Card
            img-file-name="image3.png"
            name="Креветки по-королевски в лимонном соке"
            description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу "
            price="1 820 ₽"
        />
        <Card
            img-file-name="image1.png"
            name="Устрицы по рокфеллеровски"
            description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры "
            price="2 700 ₽"
        />
        <Card
            img-file-name="image1.png"
            name="Устрицы по рокфеллеровски"
            description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры "
            price="2 700 ₽"
        />
        <Card
            img-file-name="image2.png"
            name="Устрицы по рокфеллеровски"
            description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры "
            price="1600 ₽"
        />
        <Card
            img-file-name="image3.png"
            name="Креветки по-королевски в лимонном соке"
            description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу "
            price="1 820 ₽"
        />
        <Card
            img-file-name="image1.png"
            name="Устрицы по рокфеллеровски"
            description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры "
            price="2 700 ₽"
        />
    </div>
</template>

<script>
import Card from '@/components/elements/CardProduct.vue';
export default {
    name: 'MianBlock',
    components: {
        Card,
    },
};
</script>

<style lang="scss" scoped>
.product_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
    padding: 40px;
}
</style>
