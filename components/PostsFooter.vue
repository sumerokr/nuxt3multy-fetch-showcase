<script setup lang="ts">
const {
  public: { dataSource },
} = useRuntimeConfig();

const { data: posts } = await useFetch<{ id: number; title: string }[]>(
  `${dataSource}/posts?_limit=10`,
  { key: "posts" }
);
</script>

<template>
  <div>
    <h2>App Footer</h2>
    <ul v-if="posts">
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>
