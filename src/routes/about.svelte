<svelte:head>
	<title>About</title>
</svelte:head>
<script>
	import successkid from 'images/successkid.jpg';
</script>
<style>
	#about{
	width:100%;
	height: 100vh;
	background-color:#161616;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 50px 5% 0px 5%;
	position: relative;
}
.about-text{
	font-family: calibri;
	width: 50%;
}
.about-text h1{
	font-size: 5rem;
	color:#17d1ac;
}
.about-text h2{
	font-size: 3rem;
	color:#FFFFFF;
	font-weight: 400;
}
.about-text h1,h2{
	margin: 0px;
	padding: 0px;
}
img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}
.about-text p{
	font-size: 1.2rem;
	color:rgba(255,255,255,0.90);
	
}
.about-text button{
	width: 180px;
	height: 40px;
	border-radius: 20px;
	border: none;
	outline: none;
	background-color:#17d1ac;
}
.about-text button:hover{
	background-color: #FFFFFF;
	transition: all ease 0.3s;
}

	</style>

<section id="about">
	<!--text---------------------->
	<div class="about-text">
	<h1>About Me</h1>
	<h2>Software Engineer</h2>
	<p>I enjoy solving real world problems using software engineering. It is more interesting to me more when I am doing these problems by software and hardware programs. So I am a programmer. Passionated to collaborate to open source projects and other tech staffs</p>
	<button>View More Details</button>
	</div>
	<!--about-model----------------->
	<div class="about-model">
	<img alt="model" src="{successkid}"/>	
	</div>
	</section>