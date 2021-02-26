

<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
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
	width: 500px;
	position: absolute;
	left: 20%;
	top: 50%;
	transform: translate(-20%,-50%);
}
.name p:nth-child(1),.name .details{
	color:#6c707c;
	font-size: 16px;
}
.name h1{
	font-family:Poppins;
	font-size: 40px;
	margin:0px;
	letter-spacing: 3px;
	color:#292929;
}
.black-line {
  align-self: end;
  width: 50%;
  height: 15%;
  margin-bottom: 4em;
  position: absolute;
	bottom:0px;
	left: -3%;
	border-right: 1px solid  rgba(41,41,41,0.30);
}
 
.black-line::after{
  content: ' ';
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 11px 11px 0 11px;
 border-color:  #292929 transparent transparent transparent;
  right: -.7em;
  bottom: -2px;
}
 
.social{
	position: absolute;
	left: 50px;
	bottom: 50px;
	display: flex;
 
}
.social a{
	margin: 6px 12px;
 
}
.social i{
	color:rgba(18,17,17,0.40);
	font-size: 14px;
}
.social a:hover i{
	color:#17d1ac;
	transition: all ease 0.5s;
}
</style>
<script>
	import successkid from 'images/successkid.jpg';
</script>
<svelte:head>
	<title>Didier Munezero</title>
</svelte:head>
 <!--name--------------------------->
 <div class="name">
	<!--hello------->
	<!--name--->
	<p>Hello there,</p>
	<h1>I'm Didier MUNEZERO</h1>
	<!--details--------------->
	<p class="details">	I am a software engineer at RCA. I live for programming</p>
	
		
	</div>
	<!--social---------------->
	<div class="social">
	<a href="facebook.com"><i class="fab fa-facebook-f"></i></a>	
	<a href="facebook"><i class="fab fa-twitter"></i></a>
	<a href="facebook"><i class="fab fa-instagram"></i></a>
	<a href="facebook"><i class="fab fa-youtube"></i></a>	
	</div>