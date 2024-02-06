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
            <p class="card__title">{{ title }}</p>
            <p v-if="type == 'main'" class="card__description">
                {{ description }}
            </p>
        </div>
        <div class="card__price-block">
            <p class="card__price">{{ price.toLocaleString() + ' ₽' }}</p>
            <ButtonIcon class="card_button" @click="onButtonCLick" />
        </div>
    </div>
</template>

<script>
import { getCurrentInstance } from 'vue';
import { useStore } from 'vuex';
import ButtonIcon from '@/components/ui/ButtonIcon.vue';
export default {
    name: 'CardEl',

    components: {
        ButtonIcon,
    },
    props: {
        id: {
            type: Number,
            default: null,
        },
        title: {
            type: String,
            default: '',
        },
        description: {
            type: String,
            default: '',
        },
        price: {
            type: Number,
            default: 0,
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
    setup(props) {
        const busketCardArrayIndex = getCurrentInstance().vnode.key;
        const store = useStore();
        const onButtonCLick = () => {
            if (props.type == 'main') {
                store.commit('addToBasketProducts', props.id);
                return;
            }
            store.commit('deleteFromBusketProducts', busketCardArrayIndex);
        };

        return {
            onButtonCLick,
        };
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

    .card__title {
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
    padding-bottom: 35px;
    .card__main-block {
        display: flex;
        align-items: center;
    }
    .card__image {
        width: 132px;
        height: 132px;
        margin-right: 88px;
    }

    .card__title {
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
