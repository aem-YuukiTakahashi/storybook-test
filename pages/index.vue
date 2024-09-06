<template lang="pug">
.test TEST

  div
    lv1-button(
      :type="'button'"
      :disabled="false"
    )
      | Button


  div
    img(:src='imgList[0]' alt="img1")

  div
    a.dl-btn(:href='imgList[0]' download='img1.png') Download
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        "./images/img1.png",
      ]
    }
  },
  computed: {
  },
  mounted() {
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
.dl-btn {
  display: inline-block;
  padding: 15px 20px;
  background-color: #fff;
  border: 1px solid #000;
  color: #000;
}
</style>
