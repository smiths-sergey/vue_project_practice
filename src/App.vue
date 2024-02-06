<template>
    <router-view />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    font-family: Montserrat;
    background: #161516;
    color: #fff;
    padding-left: calc(50% - 1440px);
    min-height: 100vh;
}
p {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
}
a {
    text-decoration: none;
}
</style>
