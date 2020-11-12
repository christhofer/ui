<template>
  <button :type="type" :disabled="disabled || loading">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "submit"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  @apply px-4 py-2 text-center shadow rounded;
}
</style>
