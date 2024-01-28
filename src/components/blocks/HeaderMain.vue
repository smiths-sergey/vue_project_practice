<template>
    <div class="header">
        <div>
            <p class="header__name">Наша продукция</p>
        </div>
        <div class="header__right_block">
            <div class="header__chart_info">
                <p>3 товара</p>
                <p>на сумму 3 500 ₽</p>
            </div>
            <div>
                <basketIcon />
            </div>
            <!-- <p>Кнопка</p> -->
        </div>
    </div>
</template>

<script>
import basketIcon from '@/components/icons/busketIcon.vue';
export default {
    name: 'HeaderBlock',

    components: {
        basketIcon,
    },
};
</script>
<style lang="scss" scoped>
.header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 40px;
}
.header {
    padding-left: 70px;
    padding-right: 70px;
    padding-top: 50px;
}
.header__right_block {
    display: flex;
    gap: 34px;
}

.header__chart_info {
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
}
.header__name {
    font-family: Montserrat;
    font-size: 31px;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
}
</style>
