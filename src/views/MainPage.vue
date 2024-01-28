<template>
    <HeaderBlock />
    <MainBlock />
</template>

<script>
import MainBlock from '@/components/blocks/Main.vue';
import HeaderBlock from '@/components/blocks/HeaderMain.vue';
export default {
    name: 'MainPage',

    components: {
        MainBlock,
        HeaderBlock,
    },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Montserrat;
    background: #161516;
    color: #fff;
    max-width: 1440px;
    margin: 0 auto;
}
</style>
<style lang="scss" scoped></style>
