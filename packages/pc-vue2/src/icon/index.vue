<template>
  <i
    :class="iconName"
    v-bind="$attrs"
    :style="{'color': color}"
    v-on="$listeners"
  />
</template>

<script>
export default {
  name: 'DsIconfont',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconName () {
      return `ds-iconfont iconfont ${this.iconClass}`
    }
  }
}
</script>
