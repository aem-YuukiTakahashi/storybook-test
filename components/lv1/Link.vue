<!--
  リンクコンポーネント
  nuxt-linkとaタグをURLに応じて出し分け
  isBlankをfalseで渡すことでブランクにしないことも可能
-->
<template lang="pug">
a.link(v-if='!isBlank && isBlank !== null' :href='url' :class='{"link--line": underline }')
  slot
a.link(
  v-else-if='isExternal || isBlank'
  :href='url'
  :class='{"link--line": underline }'
  target='_blank'
  rel='noopener noreferrer'
)
  slot
component.link(
  v-else
  :is='tag'
  :class='{"link--line": underline }'
  :to='url'
  @click='onClick'
)
  slot
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: '',
      required: true,
    },
    isBlank: {
      type: Boolean,
      default: null,
    },
    underline: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    slotText() {
      return this.$slots.default?.[0].text;
    },
    isExternal() {
      return /^https?:\/\//.test(this.url);
    },
    isSameRoute() {
      return this.url === this.$route.path;
    },
    tag() {
      return this.isSameRoute ? 'span' : 'nuxt-link';
    },
  },
  methods: {
    onClick() {
      if (this.isSameRoute) {
        this.$emit('sameRoute', true);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.link {
  color: #000;
  text-decoration: none;
  &--en {
  }
  &--line {
    text-decoration: underline;
  }
}
</style>
