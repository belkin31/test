<template>
  <input type="text" v-model="query" @input="$emit('search', query)" placeholder="Поиск товара..."/>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return { query: '' };
  }
};
</script>
