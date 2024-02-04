<template>
    <button class="button_icon">+</button>
</template>

<script>
export default {
    name: 'ButtonIcon',

    components: {},
};
</script>

<style lang="scss" scoped>
.button_icon {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    width: 30px;
    height: 30px;
    border: 1px solid #ffff;
    color: #ffff;
    border-radius: 50%;
    font-size: 25px;
}

</style>
