<script setup lang="ts">
const {
  public: { dataSource },
} = useRuntimeConfig();

const { data: users } = await useFetch<{ id: number; name: string }[]>(
  `${dataSource}/users?_limit=10`
);
</script>

<template>
  <div>
    <h2>App Footer</h2>
    <ul v-if="users">
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>
