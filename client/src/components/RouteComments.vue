<template>

    <div class="container">
        <div class="row">
            <div class="col-md-4">
                
            </div>
            <div id="testimonials-1" class="mt-4 col-md-8 testimonials testimonials-v1">
                <div class="item">
                    <p>Crasjusto ducimus qui cupiditate non provident, similique sunt in culpaid est anditiis praesentium praesentium blanditiis praesentium non provident, similique sunt in culpaid est anditiis praesentium praesentium..</p>
                    <div class="testimonial-info">
                        <img class="rounded-x" src="assets/img/testimonials/img1.jpg" alt="">
                        <span class="testimonial-author">
                            Jeremy Asigner 
                            <div>
                                <RatingComponent :value=2 :total=5 />
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!-- 
    <div class="row">
        <div class="col-md-6">
            <div id="testimonials-6" class="carousel slide testimonials testimonials-v1">
                <div class="carousel-inner">
                    <div class="item active">
                        <p>Crasjusto ducimus qui cupiditate non provident, similique sunt in culpaid est anditiis praesentium praesentium blanditiis praesentium non provident, similique sunt in culpaid est anditiis praesentium praesentium..</p>
                        <div class="testimonial-info">
                            <img src="assets/img/testimonials/user.jpg" alt="">
                            <span class="testimonial-author">
                                Jeremy Asigner 
                                <em>Web Developer, Unify Theme.</em>
                            </span>
                        </div>
                    </div>
                    <div class="item">
                        <p>Crasjusto ducimus qui cupiditate non provident, similique sunt in culpaid est anditiis praesentium praesentium blanditiis praesentium non provident, similique sunt in culpaid est anditiis praesentium praesentium..</p>
                        <div class="testimonial-info">
                            <img src="assets/img/testimonials/img1.jpg" alt="">
                            <span class="testimonial-author">
                                User 
                                <em>Java Developer, Htmlstream</em>
                            </span>
                        </div>
                    </div>
                    <div class="item">
                        <p>Crasjusto ducimus qui cupiditate non provident, similique sunt in culpaid est anditiis praesentium praesentium blanditiis praesentium non provident, similique sunt in culpaid est anditiis praesentium praesentium..</p>
                        <div class="testimonial-info">
                            <img src="assets/img/testimonials/img2.jpg" alt="">
                            <span class="testimonial-author">
                                Kate Davenport 
                                <em>Web Designer, Google Inc.</em>
                            </span>
                        </div>                                
                    </div>
                </div>
                
                <div class="carousel-arrow">
                    <a class="left carousel-control" href="#testimonials-6" data-slide="prev">
                        <i class="fa fa-angle-left"></i>
                    </a>
                    <a class="right carousel-control" href="#testimonials-6" data-slide="next">
                        <i class="fa fa-angle-right"></i>
                    </a>
                </div>
            </div>                        
        </div>
        <div class="col-md-6">
            <div id="testimonials-7" class="carousel slide testimonials testimonials-v1 testimonials-bg-dark">
                <div class="carousel-inner">
                    <div class="item active">
                        <p>Crasjusto ducimus qui cupiditate non provident, similique sunt in culpaid est anditiis praesentium praesentium blanditiis praesentium non provident, similique sunt in culpaid est anditiis praesentium praesentium..</p>
                        <div class="testimonial-info">
                            <img class="rounded-x" src="assets/img/testimonials/img1.jpg" alt="">
                            <span class="testimonial-author">
                                Jeremy Asigner 
                                <em>Web Developer, Unify Theme.</em>
                            </span>
                        </div>
                    </div>
                    <div class="item">
                        <p>Crasjusto ducimus qui cupiditate non provident, similique sunt in culpaid est anditiis praesentium praesentium blanditiis praesentium non provident, similique sunt in culpaid est anditiis praesentium praesentium..</p>
                        <div class="testimonial-info">
                            <img class="rounded-x" src="assets/img/testimonials/user.jpg" alt="">
                            <span class="testimonial-author">
                                User 
                                <em>Java Developer, Htmlstream</em>
                            </span>
                        </div>
                    </div>
                    <div class="item">
                        <p>Crasjusto ducimus qui cupiditate non provident, similique sunt in culpaid est anditiis praesentium praesentium blanditiis praesentium non provident, similique sunt in culpaid est anditiis praesentium praesentium..</p>
                        <div class="testimonial-info">
                            <img class="rounded-x" src="assets/img/testimonials/img2.jpg" alt="">
                            <span class="testimonial-author">
                                Kate Davenport 
                                <em>Web Designer, Google Inc.</em>
                            </span>
                        </div>                                
                    </div>
                </div>
                
                <div class="carousel-arrow">
                    <a class="left carousel-control" href="#testimonials-7" data-slide="prev">
                        <i class="fa fa-angle-left"></i>
                    </a>
                    <a class="right carousel-control" href="#testimonials-7" data-slide="next">
                        <i class="fa fa-angle-right"></i>
                    </a>
                </div>
            </div>                        
        </div>
    </div> -->
</template>

<script>
import RatingComponent from './RatingComponent'
export default {
  components: {
    RatingComponent
  },
  props: {}
}
</script>

<style scoped>

/*Bootstrap Testimonials
------------------------------------*/
/* .testimonials-bs {
  padding: 50px 0;
  background: url(../img/bg/16.jpg) 50% 0 repeat fixed;  
} */

.testimonials-bs .headline-center-v2 span.author {
  color: #777;
  font-size: 14px;
}

/*Removes Bootstrap carousel background images*/
.testimonials-bs .item {
  margin-bottom: 30px;
}

.testimonials-bs .carousel-arrow {
  text-align: center;
}

.testimonials-bs .carousel-control-v2 i {
	color: #888;
	width: 30px;
	height: 30px;
	padding: 2px;
	font-size: 22px;
	display: inline-block;
	border: 2px solid #888;
}

.testimonials-bs .carousel-control-v2 i:hover {
  color: #72c02c;
  border-color: #72c02c;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
}

.testimonials-bs .carousel-control-v2.left,
.testimonials-bs .carousel-control-v2.right {
    text-decoration: none;
    background-image: none;
}

/*Team v1*/
.team-v1 li > h3 {
	color: #555;
}


/*Testimonials
------------------------------------*/
/*Testimonials*/
.testimonials {
  margin-bottom: 10px;
}

.testimonials .testimonial-info {
  color: #72c02c;
  font-size: 16px;
  padding: 0 15px;
  margin-top: 18px;
}

.testimonials .testimonial-info span {
  top: 3px;
  position: relative;
}

.testimonials .testimonial-info em {
  color: #777;
  display: block;
  font-size: 13px;
}

.testimonials .testimonial-info img {
  width: 60px;
  float: left;
  height: 60px;
  padding: 2px;
  margin-right: 15px;
  border: solid 1px #ccc;
}

.testimonials .testimonial-author {
  overflow: hidden;
}

.testimonials .carousel-arrow {
  top: -65px;
  position: relative;
}

.testimonials .carousel-arrow i {
  color: #777;
  padding: 2px;
  min-width: 25px;
  font-size: 20px;
  text-align: center; 
  background: #f5f5f5;
}

.testimonials .carousel-arrow i:hover {
  color: #fff;
  background: #72c02c;
}

.testimonials .carousel-control {
  opacity: 1;
  width: 100%;
  text-align: right;
  text-shadow: none;
  position: absolute;
  filter: Alpha(opacity = 100); /*For IE*/
}

.testimonials .carousel-control.left {
  right: 27px;
  left: auto;
}
.testimonials .carousel-control.right {
  right: 0px;
}

/*Testimonials v1*/
.testimonials.testimonials-v1 .item p {
  position: relative;
}

.testimonials.testimonials-v1 .item p:after,
.testimonials.testimonials-v1 .item p:before {
  left: 80px;
  bottom: -20px;
}

.testimonials.testimonials-v1 .item p:after {
  border-top: 22px solid; 
  border-left: 0 solid transparent;
  border-right: 22px solid transparent;
}

/*Testimonials v2*/
.testimonials.testimonials-v2 .testimonial-info {
  padding: 0 20px;
}

.testimonials.testimonials-v2 p {
  padding-bottom: 15px;
}

.testimonials.testimonials-v2 .carousel-arrow {
  top: -55px; 
}

.testimonials.testimonials-v2 .item p:after,
.testimonials.testimonials-v2 .item p:before {
  left: 8%;
  bottom: 45px;
}

.testimonials.testimonials-v2 .item p:after {
  border-top: 20px solid; 
  border-left: 25px solid transparent;
  border-right: 0px solid transparent;
}

/*General Testimonials v1/v2*/
.testimonials.testimonials-v1 p,
.testimonials.testimonials-v2 p {
  padding: 15px;
  font-size: 14px;
  font-style: italic; 
  background: #f5f5f5;
}

.testimonials.testimonials-v1 .item p:after,
.testimonials.testimonials-v2 .item p:after {
  width: 0; 
  height: 0;
  content: " ";
  display: block; 
  position: absolute; 
  border-top-color: #f5f5f5;
  border-left-style: inset; /*FF fixes*/
  border-right-style: inset; /*FF fixes*/ 
}

/*Testimonials Backgrounds*/
.testimonials-bg-dark .item p,
.testimonials-bg-default .item p {
  color: #fff;
  font-weight: 200;
}

.testimonials-bg-dark .carousel-arrow i,
.testimonials-bg-default .carousel-arrow i {
  color: #fff;
}

/*Testimonials Default*/
.testimonials-bg-default .item p {
  background: #72c02c;
}

.testimonials.testimonials-bg-default .item p:after,
.testimonials.testimonials-bg-default .item p:after {
  border-top-color: #72c02c;
}

.testimonials-bg-default .carousel-arrow i {
  background: #72c02c;
}

.testimonials.testimonials-bg-default .carousel-arrow i:hover {
  background: #5fb611;
}

/*Testimonials Dark*/
.testimonials-bg-dark .item p {
  background: #555;
}

.testimonials.testimonials-bg-dark .item p:after,
.testimonials.testimonials-bg-dark .item p:after {
  border-top-color: #555;
}

.testimonials-bg-dark .carousel-arrow i {
  color: #fff;
  background: #555;
}

.testimonials.testimonials-bg-dark .carousel-arrow i:hover {
  background: #333;
}

.testimonials.testimonials-bg-dark .testimonial-info {
  color: #555;
}

</style>