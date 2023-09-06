<template>
    <div class="input">
        <label class="input__label" v-if="label">{{ label }}</label>
        <div class="input__wrapper">
            <div class="input__icon-left" v-if="iconLeft">
                <font-awesome-icon :icon="`fa-solid fa-${iconLeft}`"></font-awesome-icon>
            </div>
            <input class="input__field" :type="type" :disabled="disabled" :placeholder="placeholder" v-model="inputValue"
                @input="handleInput" />
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

const props = defineProps({
    disabled: {
        type: Boolean,
        default: false,
    },
    label: {
        type: String,
        required: false,
    },
    placeholder: {
        type: String,
        required: false,
    },
    type: {
        type: String,
        default: 'text',
    },
    value: {
        type: [String, Number],
        required: false,
    },
    iconLeft: {
        type: String,
        required: false,
    },
});

const inputValue = ref(props.value);

const emit = defineEmits(['input'])

const handleInput = () => {
    emit('input', inputValue.value);
};
</script>
  
<style scoped lang="scss" src="./MyInput.scss"></style>