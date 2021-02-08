<template>
  <div id="app" class="m-0">
    <section v-if="errored">
      <p>Lo sentimos, no es posible obtener la información en este momento, por favor intente nuevamente mas tarde</p>
    </section>

    <section v-else >
      <div v-if="loading">Cargando...</div>

      <div v-else v-bind:key="index" v-for="(hotel, index) in info">
        <h1>{{hotel.name}}</h1>
        <img :src="hotel.imageURL"/>
        <p>Si desea obtener más información sobre este hotel, pinche <a :href="hotel.url">aquí</a>.</p>
      </div>

      <!-- Aquí quiero realizar una especie de tarjeta la cual contenga:
              - En primer lugar una foto (ampliable a carrusel) 
              - Título
              - Descripción breve de la ruta
              - Por último una serie de etiquetas o tags que contengan: Duración, personas y precio
              - Botonos de "ver ruta" y "ver resumen"
      -->

      <div class="card bg-light border-secondary" style="width: 18rem;">
        <img src="../assets/ruta.jpeg" class="card-img-top rounded img-thumbnail" alt="Imagen de la ruta">
        <div class="card-body px-1 py-2">
          <a href="#" class="card-title h4 stretched-link">Ruta de Cuevas Bajas</a>
          <p class="card-text small mt-2">Los lugares de naturaleza más espectaculares de España, teniendo en cuenta que los alojamientos cerca de rutas senderistas.</p>
          
          <div class="row align-items-center">
            <div class="col">
              <h5><span class="d-block badge bg-info text-white my-2 ml-2">Duración: 5 días</span></h5>
              <h5><span class="d-block badge bg-info text-white my-2 ml-2">Nº personas: 2</span></h5>
            </div>
            
            <div class="col">
              <h5><span class="badge bg-info text-white ">Precio: 490 €</span></h5>
            </div>
          </div>

        <!-- <div class="d-flex justify-content-around my-2">
          <a href="#" class="btn btn-outline-secondary btn-sm">Ver resumen</a>
          <a href="#" class="btn btn-outline-secondary btn-sm">Ver ruta</a>
        </div> -->
        </div>
      </div>

     

    



    </section>
  </div>
</template>

<script>
export default {
  name: 'Route',
  data () {
    return {
      info: null,
      errored: false
    }
  },
  mounted () {
    /*
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
    */
  }
}
</script>