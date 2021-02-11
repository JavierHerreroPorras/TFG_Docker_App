<template>
    <!-- <section v-if="errored">
      <p>Lo sentimos, no es posible obtener la información en este momento, por favor intente nuevamente mas tarde</p>
    </section>

    <section v-else >
      <div v-if="loading">Cargando...</div>

      <div v-else v-bind:key="index" v-for="(hotel, index) in info">
        <h1>{{hotel.name}}</h1>
        <img :src="hotel.imageURL"/>
        <p>Si desea obtener más información sobre este hotel, pinche <a :href="hotel.url">aquí</a>.</p>
      </div> -->

      <!-- Aquí quiero realizar una especie de tarjeta la cual contenga:
              - En primer lugar una foto (ampliable a carrusel) 
              - Título
              - Descripción breve de la ruta
              - Por último una serie de etiquetas o tags que contengan: Duración, personas y precio
              - Botonos de "ver ruta" y "ver resumen"
      -->

       <div class="card bg-light border-secondary h-100">
         <img :src=imageURL class="card-img-top rounded img-thumbnail" alt="Imagen de la ruta"> 
         <div class="card-body px-1 py-2">
          <a href="#" class="card-title h4 stretched-link">{{name}}</a>
          <p class="card-text small mt-2">{{description}}</p>
          
          <div class="row align-items-center">
            <div class="col-7">
              <h5><span class="d-block badge bg-info text-white my-2 ml-1">Duración: {{duration}} días</span></h5>
              <h5><span class="d-block badge bg-info text-white my-2 ml-1">Nº personas: {{people}}</span></h5>
            </div>
            
            <div class="col-5">
              <h5><span class="badge bg-info text-white ml-n3">Precio: {{price}} €</span></h5>
            </div>
          </div>

        </div>
      </div> 

    <!-- </section> -->
</template>

<script>
export default {
  name: 'Route',
  props: {
    name: String,
    description: String,
    imageURL: String,
    duration: Number,
    people: Number,
    price: Number
  },
}
</script>