<script setup lang="ts">
definePageMeta({
  layout: "users",
});

const {
  public: { dataSource },
} = useRuntimeConfig();

const { data: users } = await useFetch<{ id: number; name: string }[]>(
  `${dataSource}/users?_limit=10`
);
</script>

<template>
  <div>
    <h1>Users page</h1>
    <blockquote style="padding: 1rem; background-color: antiquewhite">
      <p>This example uses no <code>key</code> option.</p>
      <dl>
        <dt>DevTools "disable cache" unchecked? (default behavior)</dt>
        <dd>
          Requests resolve one by one (waterfall). User name blocks appear one
          by one as well
        </dd>

        <dt>DevTools "disable cache" checked?</dt>
        <dd>
          Requests resolve (almost) at once. User name blocks appear (almost) at
          once
        </dd>
      </dl>
    </blockquote>
    <ul v-if="users">
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>
