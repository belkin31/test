<template>
  <div>
    <h1>Каталог товаров</h1>
    <SearchBar @search="handleSearch"/>
    <div v-if="searchResults.length">
      <ProductList :products="searchResults"/>
    </div>
    <div v-else>
      <CatalogTree :node="catalog"/>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import CatalogTree from './components/CatalogTree.vue';
import ProductList from './components/ProductList.vue';
import SearchBar from './components/SearchBar.vue';

export default {
  components: { CatalogTree, ProductList, SearchBar },
  setup() {
    const catalog = ref(null);
    const searchResults = ref([]);

    const loadCatalog = async () => {
      catalog.value = await window.api.loadCatalog();
    };

    const handleSearch = (term) => {
      if (!term) return searchResults.value = [];
      const result = [];
      const traverse = (node) => {
        if (node.type === 'product' && node.name.toLowerCase().includes(term.toLowerCase())) {
          result.push(node);
        }
        if (node.children) node.children.forEach(traverse);
      };
      traverse(catalog.value);
      searchResults.value = result;
    };

    onMounted(loadCatalog);
    return { catalog, searchResults, handleSearch };
  }
};
</script>
<style src="./style.css"/>
