<template>
  <div v-if="options" class="category-list">
    <div v-for="(option, index) in options" :key="index" class="category-list__item">
      <div class="category-list__item-title">
        <span @click="toggleOpenCategory(index)">{{option?.name}}</span>
        <div :class="['category-list__item-toggle', this.isOpenIndexes.includes(index) ? 'category-list__item-toggle_open' : '']" @click="toggleOpenCategory(index)">
          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.9997 15.4998C17.8681 15.5006 17.7376 15.4753 17.6158 15.4256C17.494 15.3758 17.3831 15.3025 17.2897 15.2098L12.7097 10.6198C12.6167 10.5261 12.5061 10.4517 12.3843 10.4009C12.2624 10.3502 12.1317 10.324 11.9997 10.324C11.8677 10.324 11.737 10.3502 11.6151 10.4009C11.4933 10.4517 11.3827 10.5261 11.2897 10.6198L6.7097 15.2098C6.52139 15.3981 6.266 15.5039 5.9997 15.5039C5.7334 15.5039 5.478 15.3981 5.2897 15.2098C5.10139 15.0215 4.99561 14.7661 4.99561 14.4998C4.99561 14.3679 5.02158 14.2374 5.07204 14.1156C5.1225 13.9937 5.19646 13.883 5.2897 13.7898L9.8797 9.20982C10.4496 8.66225 11.2093 8.35645 11.9997 8.35645C12.7901 8.35645 13.5498 8.66225 14.1197 9.20982L18.7097 13.7898C18.8034 13.8828 18.8778 13.9934 18.9286 14.1152C18.9794 14.2371 19.0055 14.3678 19.0055 14.4998C19.0055 14.6318 18.9794 14.7625 18.9286 14.8844C18.8778 15.0062 18.8034 15.1168 18.7097 15.2098C18.6163 15.3025 18.5054 15.3758 18.3836 15.4256C18.2618 15.4753 18.1313 15.5006 17.9997 15.4998Z" fill="currentColor"/>
          </svg>
        </div>
      </div>
      <ProductList
          v-if="this.isOpenIndexes.includes(index)"
          :products="option?.children"
          @onSelect="$emit('onSelect', $event)"
      />
    </div>

  </div>
</template>

<script>
import ProductList from "../product-list/ProductList.vue";

export default {
  name: 'CategoryList',
  data() {
    return {
      isOpenIndexes: [],
    }
  },
  components: {ProductList},
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  methods: {
    toggleOpenCategory(index) {
      if (this.isOpenIndexes.includes(index)) {
        this.isOpenIndexes = this.isOpenIndexes.filter(i => i !== index);
      } else {
        this.isOpenIndexes.push(index);
      }
    }
  }
};
</script>
<style src="./category-list.scss"/>
