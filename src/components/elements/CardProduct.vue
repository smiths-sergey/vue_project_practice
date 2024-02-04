<template>
    <div
        :class="{
            card__main: type == 'main',
            card__basket: type == 'basket',
        }"
    >
        <div class="card__main-block">
            <img
                class="card__image"
                :src="require('@/assets/' + imgFileName)"
                alt="image"
            />
            <p class="card__name">{{ name }}</p>
            <p v-if="type == 'main'" class="card__description">
                {{ description }}
            </p>
        </div>
        <div class="card__price-block">
            <p class="card__price">{{ price }}</p>
            <ButtonIcon class="card_button" />
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
        type: {
            type: String,
            default: 'main',
        },
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

    .card__name {
        font-size: 17px;
        font-weight: 500;
        margin-bottom: 9px;
    }
    .card__description {
        font-size: 14px;
        font-weight: 400;
    }
    .card_button:hover {
        background-color: #d58c51;
        border: none;
    }
}

.card__basket {
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    .card__main-block {
        display: flex;
        align-items: center;
    }
    .card__image {
        width: 132px;
        height: 132px;
        margin-right: 88px;
    }

    .card__name {
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
