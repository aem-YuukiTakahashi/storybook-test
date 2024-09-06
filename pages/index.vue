<template lang="pug">
.test TEST

  div
    lv1-button(
      :type="'button'"
      :disabled="false"
    )
      | Button


  div
    img(src='/images/img1.png')

  div
    a.dl-btn(href='/images/img1.png' download) IMG Download

</template>

<style lang="scss" scoped>
.dl-btn {
  display: block;
  padding: 15px 20px;
  background-color: #fff;
  border: 1px solid #000;
  color: #000;
}
</style>
