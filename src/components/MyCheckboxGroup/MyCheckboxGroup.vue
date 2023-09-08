<script setup>
  import MyCheckbox from '../MyCheckbox';

  const emit = defineEmits(['update:value'])
  const props = defineProps({
    value: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true,
      validator: (value) => {
        const hasNameKey = value.every((item) => Object.keys(item).includes('name'))
        const hasIdKey = value.every((item) => Object.keys(item).includes('id'))
        return hasNameKey && hasIdKey
      }
    }
  })

  const check = (params) => {
    let updateValue = [...props.value]
    if (params.checked) {
      updateValue.push(params.itemId)
    } else {
      updateValue.splice(updateValue.indexOf(params.itemId), 1)
    }
    emit('update:value', updateValue)
  }
</script>

<template>
  <div v-for="item in items" :key="item.id">
    <my-checkbox
      :label="item.name"
      :id="item.id"
      :name="name"
      :value="item.value"
      :checked="value.includes(item.id)"
      group
      @updateCheckboxGroup="check"
    />
  </div>
</template>