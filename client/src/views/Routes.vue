<template>
  <div>
    <h1>Estas son las rutas que ofrecemos</h1>
    <Route/>
  </div>
</template>

<script>
// @ is an alias to /src
import Route from '@/components/Route.vue'

export default {
  name: 'Routes',
  components: {
    Route
  }
}
</script>