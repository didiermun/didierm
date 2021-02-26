<svelte:head>
	<title>About</title>
</svelte:head>
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
	font-family: Hack, monospace;
	font-size: 17px;
	width: 100%;
}
.about-text *{
	width: 80%;
	margin: 10px auto;
	padding: 0px;
}
.about-text h1{
	font-size: 3rem;
	color:#17d1ac;
}
.about-text h2{
	font-size: 1.7rem;
	color:#FFFFFF;
	font-weight: 400;
}
.about-text p{
	font-size: 1rem;
	color:rgba(255,255,255,0.90);
	
}
.about-text button{
	margin-left: 15rem;
	width: 80%;
	margin: 10px auto;
	padding: 0px;
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
	<h2>A Software Engineer</h2>
	<p>I enjoy solving real world problems using software engineering. It is more interesting to me more when I am doing these problems by software and hardware programs. So I am a programmer. Passionated to collaborate to open source projects and other tech staffs</p>
	<button>View More Details</button>
	</div>
	</section>