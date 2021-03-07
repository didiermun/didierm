<svelte:head>
	<title>Didier's Services</title>
</svelte:head>

<style>
    #services{
	min-height:100vh;
	box-sizing: border-box;
	font-family: calibri;
	align-items: center;
	justify-content: center;
	padding-top: 40px;
	
}
 
.s-box{
	background-color: #2B2B2B;
	min-width:300px;
	max-width: 320px;
	height: 380px;
	margin: 20px;
	border-radius: 8px;
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
	font-size: 0.8rem;
	font-family: Poppins;
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
	font-family: Hack, monospace;
	color:#FFFFFF;
	background-color: #151515;
	padding: 10px 15px;
	position: absolute;
	top: 0px;
	left: 50%;
	transform: translateX(-50%);
	font-size: 1.1em;
	border-radius: 0px 0px 10px 10px;
	box-shadow: 2px 2px 12px rgba(0,0,0,0.2);
}
.s-box:hover{
	transform: translateY(-3);
	transition: all ease 1.5s;
	
}
    </style>
  <section id="services">
	<div class="b-container">
	<div class="s-box">
	<div class="s-b-img">
		<div class="s-type">Frontend</div>
		<img src="services/front.jpg" alt="Frontend Dev">
	</div>
	<div class="s-b-text">
	<a href="/services" style="text-decoration:none">On front end side, I use some of javascript frameworks to do. Those includes Vue JS , React JS, Svelte. I have been using these for years to mean, I am familiar</a>	
	</div>
	</div>

	<div class="s-box">

	<div class="s-b-img">
		<div class="s-type">Backend</div>

		<img src="services/back.jpg" alt="Backend Dev">
	</div>

	<div class="s-b-text">
	<a href="/services" style="text-decoration:none">When it comes to backend development, I have been using Javascript and Java. Frameworks like Nest Js, ExpressJS, GraphQl, Prisma, Vulcan Js in Javascript, I do use them. I also do Spring Boot in Java Backend developement. Very good at that one.</a>	
	</div>
	</div>
		
	<div class="s-box">

	<div class="s-b-img">

		<div class="s-type">Mobile Dev</div>
		
		<img src="services/mob.jpg" alt="Mobile Dev">
	</div>
	
	<div class="s-b-text">
	<a href="/services" style="text-decoration:none">I am new to this but not bad, I am still studying we can go with this one using flutter</a>	
	</div>
	</div>
	</div>
	</section>
  