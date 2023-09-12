<script setup>
  const emits = defineEmits(['update:checked', 'updateCheckboxGroup'])
  const props = defineProps({
    name: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    group: {
      type: Boolean,
      default: false
    },
  })

  const handleClick = (event) => {
    if (props.group) {
      emits('updateCheckboxGroup', {itemId: props.id, checked: event.target.checked})
    } else {
      emits('update:checked', event.target.checked)
    }
  }
</script>

<template>
  <div>
    <input
      :class="['checkbox']"
      type="checkbox"
      :name="name"
      :id="id"
      :value="value"
      :checked="checked"
      :disabled="disabled"
      @input="handleClick($event)">
    <label :for="id">{{label}}</label>
  </div>
</template>

<style scoped lang="scss" src="./MyCheckbox.scss"></style>