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
  import { defineProps, defineEmits, ref } from "vue";
  
  const { items, value, name } = defineProps(["items", "value", "name"]);
  const emit = defineEmits(["update:value"]);
  
  const checkedValue = ref(value);
  
  const updateCheckedValue = (value) => {
    checkedValue.value = value;
    emit("update:value", checkedValue.value);
  };
  </script>
  
  <style scoped lang="scss" src="./MyRadioGroup.scss"></style>
  