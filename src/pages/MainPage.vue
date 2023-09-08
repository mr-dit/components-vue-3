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
            <my-checkbox
                label="Checkbox Active"
                id="checkboxActive"
                name="checkboxActive"
                value="I like it"
                v-model:checked="checkboxActive"/>
                {{checkboxActive}}
            <my-checkbox
                label="Checkbox Disabled"
                id="checkboxDisabled"
                name="checkboxDisabled"
                value="I like it"
                :disabled="checkboxDisabled"
                v-model:checked="checkboxDisabledChecked"/>
        </div>
        <div class="wrapper__item">
            <my-input placeholder="Напишите что-то..." iconLeft="magnifying-glass" @input="handleInput"></my-input>
            <my-input placeholder="Напишите что-то..." iconLeft="magnifying-glass" :disabled="true"></my-input>
            <my-input type="password" placeholder="Password"></my-input>
            <my-input placeholder="Напишите что-то..." :value="124214124"></my-input>
        </div>
        <div class="wrapper__item">
            <my-radio-button label="Option 1" name="rbtn" value="option1" v-model:checked-value="selectedOption" />
            <my-radio-button label="Option 2" name="rbtn" value="option2" v-model:checked-value="selectedOption" />
        </div>
        <div class="wrapper_item">
            <my-checkbox-group v-model:value="selectedItemId" name="heroes" :items="checkboxItems"/>
            {{ selectedItemId }}
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import MyButton from '../components/MyButton';
import MyCheckbox from '../components/MyCheckbox';
import MyInput from '../components/MyInput';
import MyRadioButton from "../components/MyRadioButton";
import MyCheckboxGroup from '../components/MyCheckboxGroup';


const selectedOption = ref(null);

const checkboxActive = ref(true)
  const checkboxDisabled = ref(true)
  const checkboxDisabledChecked = ref(false)

  const checkboxItems = ref([
  { id: "1", name: "checkboxGroup1", value: "option1", },
  { id: "2", name: "checkboxGroup2", value: "option2", },
  { id: "3", name: "checkboxGroup3", value: "option3", },
])
  const selectedItemId = ref(['1', '3'])


const handleButtonClick = () => {
    console.log('Button clicked');
};

const handleInput = (value) => {
    console.log(value)
};
</script>

<style scoped lang="scss" src="./MainPage.scss"></style>
