<template>
    <div id="app">
  <section v-if="errored">
    <p>Lo sentimos, no es posible obtener la información en este momento, por favor intente nuevamente mas tarde</p>
  </section>

  <section v-else>
    <div v-if="loading">Cargando...</div>

    <div v-else v-bind:key="index" v-for="(hotel, index) in info">
      <h1>{{hotel.name}}</h1>
      <img :src="hotel.imageURL"/>
      <p>Si desea obtener más información sobre este hotel, pinche <a :href="hotel.url">aquí</a>.</p>
    </div>

  </section>
</div>
</template>

<script>
export default {
  name: 'Hotel',
  data () {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  mounted () {
    this.axios
      .get('http://localhost:8080/api/hotel/')
      .then(response => {
        this.info = response.data.hotels
        console.log(response)
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
}
</script>