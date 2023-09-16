<template>
    <div class="radio-group">
      <my-radio-button
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :name="name"
        :value="item.value"
        :label="item.label"
        :checked="item.value === checkedValue"
        @update:checkedValue="updateCheckedValue"
      ></my-radio-button>
    </div>
  </template>
  
  <script setup>
  import MyRadioButton from "../MyRadioButton";
  import { ref } from "vue";
  
  const props = defineProps({
    value: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true,
    }
  })
  const emit = defineEmits(["update:value"]);
  
  const checkedValue = ref(props.value);
  
  const updateCheckedValue = (value) => {
    checkedValue.value = value;
    emit("update:value", checkedValue.value);
  };
  </script>
  
  <style scoped lang="scss" src="./MyRadioGroup.scss"></style>
  