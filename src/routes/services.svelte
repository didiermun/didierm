<svelte:head>
	<title>About</title>
</svelte:head>
<script>
	import successkid from 'images/successkid.jpg';
</script>
<style>
    #services{
		width:100%;
	height:100vh;
	box-sizing: border-box;
	font-family: calibri;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top: 40px ;
	
}
 
.s-heading h1{
	color:#FFFFFF;
	font-size: 3rem;
	margin: 0px;
	padding: 0px;
	
}
.s-heading p{
	color:rgba(255,255,255,0.30);
	font-size: 1rem;
	margin: 0px;
	padding: 0px;
}
.s-heading{
	text-align: center;
	margin: 20px 0px;
}
.s-box{
	background-color: #2B2B2B;
	width:350px;
	height: 500px;
	margin: 20px;
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 2px 2px 12px rgba(0,0,0,0.1);
	position: relative;
}
.b-container{
	display: flex;
	justify-content: center;
	align-content: center;
 
	
}
.s-b-img{
	width: 100%;
	height: 70%;
	
}
.s-b-img img{
	width:100%;
	height: 100%;
	
}
.s-b-text{
	width: 100%;
	height: 30%;
	background-color:#1E1E1E;
	display:flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}
.s-b-text a{
	margin: 0px;
	color:#FFFFFF;
	font-size: 1.1rem;
	font-family: calibri;
	display: block;
    display: -webkit-box;
	max-width: 80%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
.s-b-text a:hover{
	color:rgba(255,255,255,0.50)
}
.s-type{
	font-family: calibri;
	color:#FFFFFF;
	background-color: #151515;
	padding: 10px 15px;
	position: absolute;
	top: 0px;
	left: 50%;
	transform: translateX(-50%);
	font-size: 18px;
	border-radius: 0px 0px 10px 10px;
	box-shadow: 2px 2px 12px rgba(0,0,0,0.2);
}
.s-box:hover{
	transform:translateY(-10px);
	transition: all ease 0.3s;
	
}
    </style>
  <!--services-------------------->
  <section id="services">
	<!--heading-------------->
	<div class="s-heading">
	<h1>Services</h1>
	<p>Here Is The Some Servies Which We Provide You.</p>
	</div>
	<!--services-box-container--------->
	<div class="b-container">
	<!--box-1---------------->
	<div class="s-box">
	<!--img------------->
	<div class="s-b-img">
		<!--type----------->
		<div class="s-type">Front-End</div>
		<!--name------->
		<img src="images/s1.png">
	</div>
	<!--text----------------->
	<div class="s-b-text">
	<a href="#">With Divi, every part of your website is customizable. You have complete freedom to create the perfect website for you or your clients. Easily change colors, fonts and text styles. Apply stunning animations.</a>	
	</div>
	</div>
		<!--box-2---------------->
	<div class="s-box">
	<!--img------------->
	<div class="s-b-img">
	<!--type----------->
		<div class="s-type">Back-End</div>
		<!--name------->
		<img src="images/s2.png">
	</div>
	<!--text----------------->
	<div class="s-b-text">
	<a href="#">With Divi, every part of your website is customizable. You have complete freedom to create the perfect website for you or your clients. Easily change colors, fonts and text styles. Apply stunning animations.</a>	
	</div>
	</div>
		<!--box-3---------------->
	<div class="s-box">
	<!--img------------->
	<div class="s-b-img">
		<!--type----------->
		<div class="s-type">SEO</div>
		<!--name------->
		<img src="images/s3.jpg">
	</div>
	<!--text----------------->
	<div class="s-b-text">
	<a href="#">With Divi, every part of your website is customizable. You have complete freedom to create the perfect website for you or your clients. Easily change colors, fonts and text styles. Apply stunning animations.</a>	
	</div>
	</div>
	</div>
	</section>
  