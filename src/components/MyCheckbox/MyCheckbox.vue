<template>
    <input
      class="checkbox"
      type="checkbox"
      :id="value"
      :checked="checked"
			:value="value"
      :disabled="disabled"
      @input="handleChange($event)"
    />
    <label :for="value" :class="{ '--disable': disabled }">{{ label }}</label>
</template>

<script setup>
const props = defineProps({
  label: {
				type: String,
				default: '',
			},
			value: {
				type: String,
				default: '',
			},
			disabled: {
				type: Boolean,
				default: false,
			},
			checked: {
				type: Boolean,
				default: false,
			}
});

const emit = defineEmits(['update:checked']);

function handleChange(event) {
    emit('update:checked', event.target.checked);
};
</script>

<style scoped lang="scss" src="./MyCheckbox.scss"></style>