<template>
  <div class="home">
     <img alt="Vue logo" src="../assets/logo.png">

		<font-awesome-icon icon="spinner" />

      <div class="row row-cols-1 row-cols-md-4">
        <div class="col mb-4">
          <div class="card bg-light border-secondary h-100">
                <img src="../assets/ruta.jpeg" class="card-img-top rounded img-thumbnail" alt="Imagen de la ruta"> 
                <div class="card-body px-1 py-2">
                  <a href="#" class="card-title h4 stretched-link">Ruta</a>
                  <p class="card-text small mt-2 crop-text-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, obcaecati, natus iure velit quasi architecto animi consequatur facilis sint quis laboriosam quod incidunt reprehenderit? Rem ex eaque tempora voluptate velit.
                  Voluptatibus numquam beatae quae quia quibusdam </p>
                  <div class="row align-items-center">
                    <div class="col-7">
                      <h5><span class="d-block badge bg-info text-white my-2 ml-1">Duración:  días</span></h5>
                      <h5><span class="d-block badge bg-info text-white my-2 ml-1">Nº personas: </span></h5>
                    </div>
                    
                    <div class="col-5">
                      <h5><span class="badge bg-info text-white ml-n3">Precio:  €</span></h5>
                    </div>
                  </div>

                </div>
              </div>
        </div>
      </div> 
</div>
</template>

<script>
// @ is an alias to /src
import VPagination from "vue3-pagination";
import { ref } from 'vue';
import "vue3-pagination/dist/vue3-pagination.css";

export default {
  name: 'Home',
  components: {
	  VPagination,
  },
  setup() {
    const page = ref(1);
    return { page };
  },
    data () {
		return {
			posts : [''],
			totalPages: 0,
			perPage: 9,
			pages: [],		
		}
	},
	methods:{
		getPosts () {	
      		let data = [];
			for(let i = 0; i < 150; i++){
				this.posts.push({first: 'John',
					last:'Doe', 
					suffix:'#' + i});
			}  
		},
		setPages () {
			this.totalPages = Math.ceil(this.posts.length / this.perPage);
			for (let index = 1; index <= this.totalPages; index++) {
				this.pages.push(index);
			}
		},
		paginate (posts) {
			let page = this.page;
			let perPage = this.perPage;
			let from = (page * perPage) - perPage;
			let to = (page * perPage);

			this.setPages();

			return posts.slice(from, to);
		}
	},
	computed: {
		displayedPosts () {
			return this.paginate(this.posts);
		}
	},
	created(){
		this.getPosts();
		this.setPages();
	},
}
</script>

<style scoped>
.crop-text-2 {
  -webkit-line-clamp: 7;
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
</style>