<template>
  <div class="ka-ui__tag-select">
    <component
      :is="componentsMap[type]"
      v-bind="$props"
      @change="onChange"
    >
      <template #default>
        <slot name="default"></slot>
      </template>
    </component>
  </div>
</template>

<script>
import BoardBase from './components/board-base/index.vue'
import BoardPopup from './components/board-popup/index.vue'
import BoardSelect from './components/board-select/index.vue'
import { tagSelectProps } from './types'

export default {
  name: 'TagSelect',
  components: {
    BoardBase,
    BoardPopup,
    BoardSelect,
  },
  props: tagSelectProps,
  emits: ['change'],
  data () {
    return {
      componentsMap: {
        'base': 'BoardBase',
        'popup': 'BoardPopup',
        'select': 'BoardSelect',
      }
    }
  },
  methods: {
    onChange (val) {
      this.$emit('change', val)
    },
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
