<template>
  <div>
    <h1>Aquí se mostrarán los hoteles</h1>
    <Hoteles/>
  </div>
</template>

<script>
// @ is an alias to /src
import Hoteles from '@/components/Hotel.vue'

export default {
  name: 'Hotel',
  components: {
    Hoteles
  }
}
</script>