export const tagSelectProps = {
  // 类型
  type: {
    type: String,
    default: 'base',
  },
  // 可选标签类型（企业标签`qw`、群标签`chatroom`）
  tagType: {
    type: Array,
    default: () => ['qw', 'chatroom'],
  },
  // 回显数据
  value: {
    type: Array,
    default: () => []
  },
  // 最多选择标签数量
  maxNum: {
    type: Number,
    default: 0,
  },
  // 是否显示已选标签
  showSelectedTagsBox: {
    type: Boolean,
    default: false
  },
  // 是否显示搜索框
  showSearch: {
    type: Boolean,
    default: true
  },
  // 标签列表高度
  height: {
    type: String,
    default: '',
  },
};
