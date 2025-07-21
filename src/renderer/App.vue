<template>
  <div class="app">
    <div class="app__sidebar">
      <h1 class="app__sidebar-title">Каталог товаров</h1>
      <SearchBar @onSearch="handleSearch"/>
      <div class="app__sidebar-tree">
        <div v-if="isSearching" class="app__sidebar-tree-search">
          <ProductList v-if="searchResults?.length" @onSelect="onSelectProduct" :products="searchResults"/>
          <div v-else class="app__sidebar-tree-search-empty">
            По вашему запросу ничего не найдено.
          </div>
        </div>
        <CategoryList v-else @onSelect="onSelectProduct" :options="catalog?.children"/>
      </div>
    </div>
    <div class="app__content">
      <div v-if="selectedProduct">
        <div class="app__content-breadcrumbs">
          <a class="app__content-breadcrumbs-item app__content-breadcrumbs-item_link" @click="selectedProduct = null">Каталог</a> /
          <span class="app__content-breadcrumbs-item">{{selectedProduct.name}}</span>
        </div>
        <div class="app__content-product">
          <h2 class="app__content-product-title">{{selectedProduct.name}}</h2>
          <p class="app__content-product-description">{{selectedProduct.description}}</p>
          <p class="app__content-product-manufacturer"><em>{{selectedProduct.manufacturer}}</em>, {{selectedProduct.weight}}</p>
          <button>В Корзину</button>
        </div>
      </div>
      <div v-else>
        Выберите товар для просмотра деталей.
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import CategoryList from './components/category-list/CategoryList.vue';
import ProductList from "./components/product-list/ProductList.vue";
import SearchBar from './components/search-bar/SearchBar.vue';
import './style.css';

export default {
  components: { CategoryList, SearchBar, ProductList },
  setup() {
    const catalog = ref(null);
    const searchResults = ref([]);
    const selectedProduct = ref(null);
    const isSearching = ref(false);

    const loadCatalog = async () => {
      catalog.value = await window.api.loadCatalog();
    };

    const onSelectProduct = (item) => {
      selectedProduct.value = item;
    }

    const handleSearch = (term) => {
      if (term?.length) {
        isSearching.value = true;
        const result = [];
        const traverse = (node) => {
          if (node.type === 'product' && node.name.toLowerCase().includes(term.toLowerCase())) {
            result.push(node);
          }
          if (node.children) node.children.forEach(traverse);
        };
        traverse(catalog.value);
        searchResults.value = result;
      } else {
        searchResults.value = [];
        isSearching.value = false
      }

    };

    onMounted(loadCatalog);
    return { catalog, searchResults, handleSearch, onSelectProduct, selectedProduct, isSearching };
  }
};
</script>
<style src="./app.scss"/>
