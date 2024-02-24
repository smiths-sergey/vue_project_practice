<template>
  <div
    :class="{
      button: true,
      button_oragne: type == 'orange',
      button_orange_wo_hover: type == 'orange_wo_hover',
      button_transparent: type == 'transparent',
    }"
  >
    {{ text }}
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
.button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 42px;

  &_oragne {
    background-color: #d58c51;
    color: #131313;

    &:hover {
      cursor: pointer;
      background: transparent;
      color: #d58c51;
      box-sizing: border-box;
      border: 1px solid #d58c51;
    }
  }

  &_orange_wo_hover {
    background-color: #d58c51;
    color: #131313;
    &:hover {
      cursor: pointer;
    }
  }

  &_transparent {
    background-color: transparent;
    color: #d58c51;
    border: 1px solid #d58c51;

    &:hover {
      cursor: pointer;
      background-color: #d58c51;
      color: #131313;
      box-sizing: border-box;
      border: none;
    }
  }
}
</style>
