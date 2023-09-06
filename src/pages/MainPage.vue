<template>
    <div class="wrapper">
        <div class="wrapper__item">
            <my-button :disabled="false" title="Secondary btn" tooltip="This is a secondary button" type="secondary"
                @click="handleButtonClick">
            </my-button>
            <my-button :disabled="false" title="Primary btn" tooltip="This is a primary button" type="primary"
                @click="handleButtonClick">
            </my-button>
            <my-button :disabled="true" tooltip="This is a secondary button" type="secondary" borderRadius="100%"
                @click="handleButtonClick">
                <font-awesome-icon :icon="`fa-regular fa-address-book`"></font-awesome-icon>
            </my-button>

        </div>
        <div class="wrapper__item">
            <my-checkbox label="Are you ok?" v-model="isChecked" @input="handleCheckbox"></my-checkbox>
            <my-checkbox label="Are you ok?" :value="false" :disabled="true"></my-checkbox>
        </div>
        <div class="wrapper__item">
            <my-input placeholder="Напишите что-то..." iconLeft="magnifying-glass" @input="handleInput"></my-input>
            <my-input placeholder="Напишите что-то..." iconLeft="magnifying-glass" :disabled="true"></my-input>
            <my-input type="password" placeholder="Password"></my-input>
            <my-input placeholder="Напишите что-то..." :value="124214124"></my-input>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import MyButton from '../components/MyButton';
import MyCheckbox from '../components/MyCheckbox'
import MyInput from '../components/MyInput';

const isChecked = ref(false);

const handleButtonClick = () => {
    console.log('Button clicked');
}

const handleCheckbox = (event) => {
    const newValue = event.target.checked;
    console.log(`Checkbox changed to ${newValue}`);
    isChecked.value = newValue;
}

const handleInput = (value) => {
    console.log(value)
}
</script>

<style scoped lang="scss">
.wrapper {
    display: flex;
    gap: 80px;

    &__item {
        display: flex;
        flex-direction: column;
        gap: 30px;
        align-items: start;
    }
}
</style>
