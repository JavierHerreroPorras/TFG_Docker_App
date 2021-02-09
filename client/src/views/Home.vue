<template>
  <div class="home">
     <img alt="Vue logo" src="../assets/logo.png">
    
      <div class="offset">
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>User ID</th>
      </tr>
    </thead>
    <tbody>
    <tr v-for="p in displayedPosts" v-bind:key="p">
      <td>{{p.first}}</td>
      <td>{{p.last}}</td>
      <td>{{p.suffix}}</td>
    </tr>
    </tbody>
  </table>

	<div class="justify-content-center">
		<v-pagination
			v-model="page"
			:pages="totalPages"
			:range-size="1"
			active-color="#DCEDFF"
			class="d-flex justify-content-center"
		/>	
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
	  VPagination
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
