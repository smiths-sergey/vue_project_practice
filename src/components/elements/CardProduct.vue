<template>
    <div class="card">
        <div>
            <img
                class="card__image"
                :src="require('@/assets/' + imgFileName)"
                alt="image"
            />
            <p class="card__name">{{ name }}</p>
            <p class="card__description">{{ description }}</p>
        </div>
        <div class="bottom">
            <div class="card__price_wrapper">
                <p class="card__price">{{ price }}</p>
                <ButtonIcon />
            </div>
        </div>
    </div>
</template>

<script>
import ButtonIcon from '@/components/ui/ButtonIcon.vue';
export default {
    name: 'CardEl',

    components: {
        ButtonIcon,
    },
    props: {
        name: {
            type: String,
            default: '',
        },
        description: {
            type: String,
            default: '',
        },
        price: {
            type: String,
            default: '',
        },
        imgFileName: {
            type: String,
            default: '',
        },
    },
};
</script>

<style lang="scss" scoped>
.card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border: 1px solid #d58c51;

    width: 312px;
    height: 552px;
    padding: 21px;
    flex-shrink: 0;
    margin-bottom: 15px;
}

.card:hover {
    color: #d58c51;
}

.card__price_wrapper {
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
    //flex-shrink: 0;
}

.card__name {
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 9px;
}
.card__description {
    font-size: 14px;
    font-weight: 400;
}

.card__name {
    font-size: 17px;
    font-weight: 500;
}
</style>
