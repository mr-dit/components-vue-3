<template>
    <div>
        <input class="radiobutton" 
        type="radio" 
        :id="value"
        :name="name" 
        :value="value" 
        :checked="checked"
        :disabled="disabled"
        @change="handleChange($event)" />
        <label :for="value">{{ label }}</label>
    </div>
</template>
  
<script setup>

const props = defineProps({
    name: {
      type: String,
      default: ''
    },
    label: {
        type: String,
        default: '',
    },
    value: {
        type: String,
        default: '',
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
});

const emit = defineEmits(['update:checkedValue']);

const handleChange = (event) => {
    emit('update:checkedValue', event.target.value);
};
</script>
  
<style scoped lang="scss" src="./MyRadioButton.scss"></style>
  