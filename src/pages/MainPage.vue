<script>
import MyButton from '../components/MyButton';

export default {
    components: {
        MyButton
    },
    methods: {
        handleButtonClick(event) {
            console.log(event);
        }
    }
};
</script>

<template>
    <div class="wrapper">
        <div class="wrapper__item">
            <my-button :disabled="false" title="Click" tooltip="This is a secondary button" type="secondary"
                @click="handleButtonClick">
            </my-button>

            <my-button :disabled="false" title="Click Me" tooltip="This is a primary button" type="primary"
                @click="handleButtonClick">
            </my-button>

            <my-button :disabled="true" tooltip="This is a secondary button" type="secondary" borderRadius="100%"
                @click="handleButtonClick">
                <i class="fa-solid fa-file"></i>
            </my-button>

        </div>
        <div class="wrapper__item">

        </div>
    </div>
</template>

<style scoped lang="scss">
.wrapper {
    display: flex;

    &__item {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: start;
    }
}
</style>
