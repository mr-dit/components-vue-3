<template>
    <div class="table">
        <h2 class="table__title">{{ title }}</h2>
        <table>
            <thead>
                <tr>
                    <th v-for="col in cols" :key="col">{{ col }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in rows" :key="row.id">
                    <td v-for="(value, col) in row" :key="col" @click="handleCellClick(value)">{{ value }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script setup>

const props = defineProps({
    cols: {
        type: Array,
        required: true
    },
    rows: {
        type: Array,
        required: true
    },
    title: {
        type: String,
        required: false
    }
})
const emit = defineEmits(["cellClick"]);

const handleCellClick = (value) => {
    emit("cellClick", value);
};
</script>
  
<style scoped lang="scss" src="./MyTable.scss"></style>
  