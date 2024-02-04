<template>
    <div
        :class="{
            button_busket: type == 'basket',
        }"
    >
        <a href="#" class="text">{{ text }}</a>
    </div>
</template>

<script>
export default {
    name: 'ButtonUi',

    components: {},
    props: {
        type: {
            type: String,
            default: '',
        },
        text: {
            type: String,
            default: '',
        },
    },
};
</script>

<style lang="scss" scoped>
.button_busket {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #d58c51;
    width: 200px;
    height: 42px;
    .text {
        color: #131313;
    }
}
</style>
