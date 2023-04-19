<script setup lang="ts">
definePageMeta({
  layout: "default",
});
</script>

<template>
  <div>
    <h1>Index page</h1>
    <p>Use the menu above to navigate.</p>
    <p>Enable throttling in a browser DevTools</p>
    <p>
      Users page uses <code>useFetch</code> <i>without</i> a <code>key</code> to
      fetch data.
    </p>
    <p>
      Posts page uses <code>useFetch</code> <i>with</i> a <code>key</code> to
      fetch data.
    </p>
  </div>
</template>
