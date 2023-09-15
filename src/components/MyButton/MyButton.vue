<template>
  <button class="button" :class="{
    'button--primary': type === 'primary',
    'button--secondary': type === 'secondary',
  }" :style="{ 'borderRadius': `${borderRadius}` }" :title="tooltip" @click="handleClick" :disabled="disabled">
    <slot>{{ title }}</slot>
  </button>
</template>
  
<script setup>
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    required: false
  },
  tooltip: {
    type: String,
    required: false
  },
  type: {
    type: String,
    required: true,
    validator: value => ['primary', 'secondary'].includes(value)
  },
  borderRadius: {
    type: String,
    required: false
  }
})

const emit = defineEmits(['click']);

const handleClick = () => {
  emit('click')
};
</script>
  
<style scoped lang="scss" src="./MyButton.scss"></style>
  