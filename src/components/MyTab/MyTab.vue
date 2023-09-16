<template>
    <div class="tab">
        <div class="tab__nav">
            <span :class="['tab__nav__item', { 'selected': selectedTab }]" @click="clickOnTab">{{ title }}
            </span>
        </div>
        <div class="tab__content">
            <slot />
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    selectedTab: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        required: true
    }
})

const emit = defineEmits(['click'])

const clickOnTab = () => {
    emit('click')
}
</script>

<style lang="scss" scoped src="./MyTab.scss"></style>