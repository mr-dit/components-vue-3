<template>
    <div>
        <input class="radiobutton" type="radio" :id="value" :value="value" v-model="selectedValue" @change="handleChange" />
        <label :for="value">{{ label }}</label>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
});

const selectedValue = ref(null);

const emit = defineEmits(['input']);

const handleChange = () => {
    emit('input', selectedValue.value);
};
</script>
  
<style scoped lang="scss" src="./MyRadioButton.scss"></style>
  