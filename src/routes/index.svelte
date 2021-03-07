

<style>
	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
	}

	

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
	.name{
	font-family: calibri;
	width: 100%;
	position: absolute;
	left: 20%;
	top: 50%;
	transform: translate(-20%,-50%);
	text-align: center;
}
.name p:nth-child(1),.name .details{
	color:#6c707c;
	font-size: 16px;
	font-family: Poppins;
}
.name h1{
	font-family: Hack, monospace;
	font-size: 40px;
	margin:0px;
	letter-spacing: 3px;
	color:#292929;
}
 
 
.social{
	left: 50px;
	bottom: 50px;
	display: flex;
	margin: auto;
	margin-top: 410px;
    width: 60%;
    padding: 10px;
 
}
.social a{
	margin: 6px 12px;
 
}
.social i{
	color:rgba(18,17,17,0.40);
	font-size: 14px;
}
.social a:hover i{
	color:#ff971d;
	transition: all ease 0.5s;
}
</style>
<svelte:head>
	<title>Didier MUNEZERO</title>
</svelte:head>

 <div class="name">
	<p>Hello there,</p>
	<h1>I'm Didier MUNEZERO</h1>
	<!--details--------------->
	<p class="details">	I am a software engineer at RCA. I like to be a problem solver.</p>
	
		
	</div>
	<div class="social">
	<a href="https://www.facebook.com/didiermunezer38/"><i class="fab fa-facebook-f"></i></a>	
	<a href="https://twitter.com/DidierMUNEZERO4"><i class="fab fa-twitter"></i></a>
	<a href="https://www.instagram.com/munezerodidier38/"><i class="fab fa-instagram"></i></a>
	<a href="https://www.linkedin.com/in/didier-munezero-07b849194/"><i class="fab fa-linkedin"></i></a>
	<a href="https://github.com/didiermunezero"><i class="fab fa-github"></i></a>	
	</div>