<!--
  通常のボタンコンポーネント
-->
<template lang="pug">
lv1-link.button(
  v-if='url'
  :url='url'
)
  slot
button.button(
  v-else
  :disabled='disabled'
  :type='type'
)
  slot
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'button',
      validator (val) {
        if(val === '') {
          return true
        }
        return ['button', 'submit'].includes(val)
      }
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  text-align: center;
  display: block;
  width: 100%;
  max-width: 300px;
  padding: 10px 20px;
  color: #000;
  border: 1px solid #000;
  background: #fff;
  appearance: none;
  text-decoration: none;

  &:disabled {
    opacity: 0.3;
    pointer-events: none;
  }
}
</style>
