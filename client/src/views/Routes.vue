<template>
  <div class="mx-4">
    <h1>Estas son las rutas que ofrecemos</h1>

    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col mt-5" v-for="(p,index) in displayed" :key="index">
        <Route :title="'Ruta ' + p"/>
      </div>

      
    </div>
    <div class="justify-content-center mt-4">
      <v-pagination
        v-model="page"
        :pages="totalPages"
        :range-size="1"
        active-color="#DCEDFF"
        class="d-flex justify-content-center"
      />	
    </div>	
  </div>
</template>

<script>
// @ is an alias to /src
import Route from '@/components/Route.vue'
import { ref } from 'vue';
import VPagination from "vue3-pagination";
import "vue3-pagination/dist/vue3-pagination.css";

export default {
  name: 'Routes',
  components: {
    Route,
    VPagination
  },
  setup() {
    const page = ref(1);
    return { page };
  },
  data() {
    return {
		  numberRoutes : 21,
			totalPages: 0,
			perPage: 8,
			pages: [],		
		}
  },
  methods: {
    setPages () {
			//this.totalPages = Math.ceil(this.posts.length / this.perPage);
      this.totalPages = Math.ceil(this.numberRoutes / this.perPage);
			//Probar a cambiar esto para hacerlo un poco más limpio
      for (let index = 1; index <= this.totalPages; index++) {
				this.pages.push(index);
			}
		},

    paginate () {
			let from = (this.page * this.perPage) - this.perPage;
			let to = (this.page * this.perPage);

      if(this.numberRoutes < to){to = this.numberRoutes}

      const length = to - from;

			return Array.from({ length }, (_, i) => from + i)
		}
  },
  computed: {
		displayed() {
			return this.paginate();
		}
	},
	created(){
		this.setPages();
	},
  
}
</script>