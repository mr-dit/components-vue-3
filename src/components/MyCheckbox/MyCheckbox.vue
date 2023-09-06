<template>
  <label class="checkbox" :class="{ '--disable': disabled }">
    <input
      type="checkbox"
      v-model="isChecked"
      :disabled="disabled"
      @input="handleChange"
    />
    <span class="checkbox__checkmark">{{ isChecked ? '✓' : '' }}</span>
    <span class="checkbox__label">{{ label }}</span>
  </label>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  value: {
    type: Boolean,
    required: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const isChecked = ref(props.value);

const emit = defineEmits(['input'])

function handleChange(event) {
    emit('input', event);
}
</script>

<style scoped lang="scss" src="./MyCheckbox.scss">
</style>
