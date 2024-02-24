<template>
  <button
    :class="{
      button_icon: true,
      button_icon_main_add: type == 'main_add',
      button_icon_main_delete: type == 'main_delete',
      button_icon_basket: type == 'basket',
    }"
  >
    +
  </button>
</template>

<script>
export default {
  name: 'ButtonIcon',
  props: {
    type: { type: String, default: 'main_add' },
  },

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
  &:hover {
    border: none;
    cursor: pointer;
  }
  &_main_delete {
    transform: rotate(45deg);
    &:hover {
      background-color: #d58c51;
    }
  }
  &_main_add {
    &:hover {
      background-color: #d58c51;
    }
  }
}
</style>
