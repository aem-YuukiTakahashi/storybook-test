<template lang="pug">
    span
        select(:value="value" @input="selected")
            option(v-for="option in options" :key="option.code" :value="option.code") {{ option.name }}
        span.slot-text
            slot
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  methods: {
    selected($event) {
      this.$emit('selected', $event.target.value, this.id);
    },
  },
};
</script>
