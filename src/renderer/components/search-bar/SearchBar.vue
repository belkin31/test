<template>
  <input
      type="text"
      class="search-bar"
      v-model="query"
      @input="$emit('onSearch', query)"
      :placeholder="placeholderAttr"
  />
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    placeholderAttr: {
      type: String,
      default: 'Поиск товара...'
    }
  },
  emits: ['search'],
  data() {
    return { query: '' };
  }
};
</script>
<style src="./search-bar.scss"/>
