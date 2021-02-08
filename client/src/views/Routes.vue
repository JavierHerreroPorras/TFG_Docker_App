<template>
  <div class="mx-4">
    <h1>Estas son las rutas que ofrecemos</h1>

    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col">
        <Route/>
      </div>
      <div class="col">
        <Route/>
      </div>
      <div class="col">
        <Route/>
      </div>
      <div class="col">
        <Route/>
      </div>
    </div>
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