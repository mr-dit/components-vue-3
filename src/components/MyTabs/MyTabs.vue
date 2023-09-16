<template>
    <div class="tabs">
        <my-tab v-for="item in items" :key="item.id" :title="item.title" :selectedTab="item.id === modelValue"
            @click="handleTabClick(item.id)">
            <template v-if="item.id === modelValue">
                <slot></slot>
            </template>
        </my-tab>
    </div>
</template>
  
<script setup>
import { defineProps, defineEmits, ref } from "vue";
import MyTab from "../MyTab";

const props = defineProps({
    items: {
        type: Array,
        required: true,
    },
    modelValue: {
        type: String,
        required: true,
    },
});

const emit = defineEmits(["update:modelValue"]);

const handleTabClick = (itemId) => {
    emit("update:modelValue", itemId);
};
</script>
  
<style lang="scss" scoped src="./MyTabs.scss">
</style>
  