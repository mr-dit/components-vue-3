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
            <my-checkbox label="Checkbox Active" id="checkboxActive" name="checkboxActive" value="I like it"
                v-model:checked="checkboxActive" />
            {{ checkboxActive }}
            <my-checkbox label="Checkbox Disabled" id="checkboxDisabled" name="checkboxDisabled" value="I like it"
                :disabled="checkboxDisabled" v-model:checked="checkboxDisabledChecked" />
        </div>
        <div class="wrapper__item">
            <my-input placeholder="Напишите что-то..." iconLeft="magnifying-glass" @input="handleInput"></my-input>
            <my-input placeholder="Напишите что-то..." iconLeft="magnifying-glass" :disabled="true"></my-input>
            <my-input type="password" placeholder="Password"></my-input>
            <my-input placeholder="Напишите что-то..." :value="124214124"></my-input>
        </div>
        <div class="wrapper__item">
            <my-radio-button label="Option 1" name="rbtn" value="option1" v-model:checked-value="selectedOptionRadio" />
            <my-radio-button label="Option 2" name="rbtn" value="option2" v-model:checked-value="selectedOptionRadio" />
        </div>
        <div class="wrapper_item">
            <my-checkbox-group v-model:value="selectedCheckboxItem" name="heroes" :items="checkboxItems" />
            {{ selectedCheckboxItem }}
        </div>
        <div class="wrapper__item">
            <my-radio-group v-model:value="selectedRadio" name="radioGroup" :items="radioItems"></my-radio-group>
            {{ selectedRadio }}
        </div>
        <div class="wrapper__item">
            <my-select v-model="selectedOptions" :options="options" :multiple="true" label="Select an option"
                placeholder="Выберите..." />
            {{ selectedOptions }}
            <my-select v-model="selectedOptions" :options="options" :multiple="true" label="Select an option"
                placeholder="Выберите..." :disabled="true" />
        </div>
        <div class="wrapper__item">
            <my-button @click="showModal" type="primary" borderRadius="10px">Открыть модальное окно</my-button>
            <my-modal v-if="isModalVisible" @close="closeModal">
                <template #title>
                    Заголовок Модального окна
                </template>
                <template #text>
                    <p>Это текст модального окна.</p>
                </template>
                <template #buttons>
                    <my-button @click="handleCustomAction" type="secondary">ОК</my-button>
                </template>
            </my-modal>
        </div>
        <div class="wrapper__item">
            <my-tab title="tab1Title">Tab 1</my-tab>
        </div>
        <div class="wrapper__item">
            <my-tabs :items="tabItems" v-model="selectedTab">
                <p v-if="selectedTab === 'tab1'">Содержимое первой вкладки</p>
                <my-button v-if="selectedTab === 'tab2'" type="secondary">Содержимое второй вкладки</my-button>
                <p v-if="selectedTab === 'tab3'">Содержимое третьей вкладки</p>
            </my-tabs>
        </div>
        <div class="wrapper__item">
            <my-table :cols="tableCols" :rows="tableRows" title="Пользователи" @cellClick="handleCellClick" />
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
import MyRadioGroup from '../components/MyRadioGroup';
import MySelect from "../components/MySelect"
import MyModal from '../components/MyModal';
import MyTab from '../components/MyTab';
import MyTabs from '../components/MyTabs';
import MyTable from '../components/MyTable';


// Checkbox
const checkboxActive = ref(true)
const checkboxDisabled = ref(true)
const checkboxDisabledChecked = ref(false)
const checkboxItems = ref([
    { id: "1", name: "checkboxGroup1", value: "option1", },
    { id: "2", name: "checkboxGroup2", value: "option2", },
    { id: "3", name: "checkboxGroup3", value: "option3", },
])
const selectedCheckboxItem = ref(['1', '3'])

// RadioButton
const selectedOptionRadio = ref(null);

const selectedRadio = ref("groupOption1");
const radioItems = ref([
    { id: "1", label: "Option 1", value: "groupOption1" },
    { id: "2", label: "Option 2", value: "groupOption2" },
    { id: "3", label: "Option 3", value: "groupOption3" },
]);

//Select
const selectedOptions = ref([]);

const options = ref([
    { id: "1", name: "Option 1", selected: true },
    { id: "2", name: "Option 2", selected: false },
    { id: "3", name: "Option 3", selected: false },
    { id: "4", name: "Option 4", selected: false },
    { id: "5", name: "Option 5", selected: false },
    { id: "6", name: "Option 6", selected: false },
]);


// Modal

const isModalVisible = ref(false);

const showModal = () => {
    isModalVisible.value = true;
};

const closeModal = () => {
    isModalVisible.value = false;
};

const handleCustomAction = () => {
    closeModal()
    console.log("Нажата кнопка модального окна");
};


// Tab
const tabItems = [
    { id: "tab1", title: "Вкладка 1" },
    { id: "tab2", title: "Вкладка 2" },
    { id: "tab3", title: "Вкладка 3" },
]
const selectedTab = ref("tab1")

// Table
const tableCols = ["id", "Имя", "Возраст", "Город"]

const tableRows = [
    { id: 1, Имя: "Алиса", Возраст: 25, Город: "Нью-Йорк" },
    { id: 2, Имя: "Боб", Возраст: 30, Город: "Лос-Анджелес" },
    { id: 3, Имя: "Кэрол", Возраст: 28, Город: "Чикаго" },
]

const handleCellClick = (value) => {
    console.log("Клик на ячейку:", value);
}


//Button
const handleButtonClick = () => {
    console.log('Button clicked');
    console.log(selectedOptions.value)
};

//Input
const handleInput = (value) => {
    console.log(value)
};
</script>

<style scoped lang="scss" src="./MainPage.scss"></style>
