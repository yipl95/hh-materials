<template>
  <div class="ka-ui__empty">
    <img
      :src="noDataImg"
      class="img"
    >
    <div class="empty-txt">
      <slot>{{ placeHolder }}</slot>
    </div>
  </div>
</template>
<script>
import noDataImg from './images/no-data.png';
import { emptyProps } from './types'

export default {
  name: "Empty",
  props: emptyProps,
  data() {
    return {
      noDataImg
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

