<template>
  <div v-if="node">
    <div v-if="node.type === 'directory'">
      <h3>{{ node.name }}</h3>
      <ul>
        <li v-for="child in node.children" :key="child.name">
          <CatalogTree :node="child"/>
        </li>
      </ul>
    </div>
    <div v-else>
      <strong>{{ node.name }}</strong> — {{ node.description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatalogTree',
  props: ['node']
};
</script>
