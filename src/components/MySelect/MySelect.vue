
<template>
    <div class="select" :class="{ open: isOpen, disabled: disabled }" v-click-away="clickOutsideHandler">
        <div class="select__label">{{ label }}</div>
        <div class="select__selected" @click="toggleDropdown">
            <template v-if="selectedOptions.length > 0">
                {{ selectedOptions.map(option => option.name).join(', ') }}
            </template>
            <template v-else class="select__selected__placeholder">
                {{ placeholder }}
            </template>
            <span class="select__selected__icon">{{ isOpen ? '▲' : "▼" }}</span>
        </div>
        <div class="select__dropdown" v-if="isOpen">
            <div class="select__dropdown__option" v-for="option in options" :key="option.id"
                @click="toggleOption(option.id)">
                <!-- <my-checkbox :id="'option-' + option.id" :name="option.name" :value="option.id" :label="option.name"
                    :checked="selectedValues.includes(option.id)" @update:checked="toggleOption(option.id)"></my-checkbox> -->
                <input type="checkbox" :id="'option-' + option.id" :value="option.id"
                    :checked="option.selected" @change="handleOptionChange" />
                <label :for="'option-' + option.id" @click="toggleOption(option.id)">{{ option.name }}</label>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref, defineProps, defineEmits, computed } from "vue";
import MyCheckbox from "../MyCheckbox";


const { disabled, label, multiple, options, placeholder, modelValue } = defineProps([
    "disabled",
    "label",
    "multiple",
    "options",
    "placeholder",
    "modelValue",
]);
const emit = defineEmits(["update:modelValue"]);

const isOpen = ref(false);
const selectedValues = ref([]);

const toggleDropdown = () => {
    if (!disabled) {
        isOpen.value = !isOpen.value;
    }
};

const toggleOption = (optionId) => {
    if (disabled) { return }

    if (multiple) {
        if (selectedValues.value.includes(optionId)) {
            selectedValues.value = selectedValues.value.filter(
                (value) => value !== optionId
            );
        } else {
            selectedValues.value.push(optionId);
        }
    } else {
        selectedValues.value = [optionId];
        isOpen.value = false;
    }
    handleOptionChange()
};

const handleOptionChange = () => {
    emit("update:modelValue", multiple ? selectedValues.value : selectedValues[0]);
};

const selectedOptions = computed(() =>
    options.filter((option) => selectedValues.value.includes(option.id))
);

console.log(selectedValues.value)

const clickOutsideHandler = () => {
    isOpen.value = false;
};

</script>
  
  
  
<style scoped lang="scss" src="./MySelect.scss"></style>
  