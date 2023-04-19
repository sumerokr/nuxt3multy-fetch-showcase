<script setup lang="ts">
definePageMeta({
  layout: "posts",
});

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
    <h1>Posts page</h1>
    <blockquote style="padding: 1rem; background-color: antiquewhite">
      <p>This example uses <code>key</code> option.</p>
      <dl>
        <dt>DevTools "disable cache" unchecked? (default behavior)</dt>
        <dd>
          Requests resolve one by one (waterfall). Post title blocks appear
          (strictly) at once
        </dd>

        <dt>DevTools "disable cache" checked?</dt>
        <dd>
          Requests resolve (almost) at once. Post title blocks appear (strictly)
          at once
        </dd>
      </dl>
    </blockquote>

    <ul v-if="posts">
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>
