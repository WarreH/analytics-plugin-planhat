
<script setup lang="ts">
  import { onMounted } from 'vue'
  import analytics from "./analytics";

  onMounted(() => {
    analytics.identify("user12569test", {
      firstName: 'warre',
      lastName: 'hofmans',
      email: "test@test.com",
      companyExternalId:"testid123456"
      })
})

  function click(){
    analytics.track('button clicked in vue demo', {
    count: 1,
    weight:1
  })

  }
</script>

<template>
  <header>
    <div>
      <button class="button" @click="click">Click</button>
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
.button{
  height: 100px;
  width:500px;
}
</style>
