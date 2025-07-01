<template>
  <div>
    <div v-for="product in products" :key="product.name">
      <h4>{{ product.name }}</h4>
      <p>{{ product.description }}</p>
      <p><em>{{ product.manufacturer }}</em>, {{ product.weight }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: ['products']
};
</script>
