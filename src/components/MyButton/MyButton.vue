<template>
    <button
      class="button"
      :class="{
        'button--primary': type === 'primary',
        'button--secondary': type === 'secondary',
      }"
      :style="{'borderRadius':`${borderRadius}`}"
      :title="tooltip"
      @click="handleClick"
      :disabled="disabled"
    >
      <slot class="button__slot">{{ title }}</slot>
    </button>
  </template>
  
  <script>
  export default {
    props: {
      disabled: {
        type: Boolean,
        required: true
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
    },
    methods: {
      handleClick() {
        if (!this.disabled) {
          this.$emit('click', {});
        }
      }
    }
  };
  </script>
  
  <style scoped lang="scss" src="./MyButton.scss"></style>
  