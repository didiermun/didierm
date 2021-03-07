<svelte:head>
	<title>Didier's About</title>
</svelte:head>
<style>
	#about{
	width:65%;
	box-sizing: border-box;
	align-items: center;
	justify-content: space-between;
	padding: 20px 5% 0px 5%;
	margin-top: px;
	border-radius: 10px;
	margin: 70px auto;
}
.about-text{
	font-family: Poppins;
	font-size: 17px;
	width: 100%;
	margin-bottom: 0px;
	text-align: center;
}
.about-text *{
	width: 80%;
	margin: 10px auto;
	padding: 0px;
}
.about-text h2{
	font-size: 1.7rem;
	color:#000000;
	font-weight: 400;
}
.about-text p{
	font-size: 1rem;
	color:rgba(0, 0, 0, 0.9);
	
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
	background-color:#ff971d;
	font-family: Poppins;
}
.about-text button:hover{
	background-color: rgb(114, 161, 114);
	transition: all ease 0.3s;
	color: #fff;
}

	</style>

<section id="about">
	<!--text---------------------->
	<div class="about-text">
	<h2>A Software Engineer</h2>
	<p>I enjoy solving real world problems using software engineering. It is more interesting to me more when I am doing these problems by software and hardware programs. So I am a programmer. Passionated to collaborate to open source projects and other tech staffs</p>
	<button>View More Details</button>
	</div>
	</section>