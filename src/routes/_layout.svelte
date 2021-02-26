<!-- <script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script> -->


<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

ul{
	list-style:none;
}
a{
	text-decoration:none;
}
#main{
	padding:30px 50px;
	position:relative;
	width:100%;
	height: 100vh;
	box-sizing: border-box;
	background-size: 1330px;
	background-position: right bottom;
	background-repeat: no-repeat;
	background-image: url("../images/bg.png");
	background-color: #edf1fd;
}
nav{
	display:flex;
	justify-content: space-between;
	align-items: center;
	text-transform: uppercase;
	font-weight: 600;
	letter-spacing: 2px;
	font-family: calibri;
	position: fixed;
	top: 0;
	left: 0;
	width:100%;
	box-sizing: border-box;
	padding: 10px 50px;
	background-color:#F4F7FF;
	box-shadow:2px 2px 12px rgba(0,0,0,0.05); 
	z-index: 1;
}
 
.menu{
	display: flex;
}
.menu li a{
	padding: 10px 15px;
	color:#6c707c;
	font-size: 12px;
	
}
.lang{
	color:#292929;
}
.logo{
	font-size: 25px;
	font-weight: bold;
	color:#292929;
	font-family:Poppins;
}
.toggle{
	display: none;
}
.menu li a:hover{
	background-color:#292929;
	color:#FFF!important;
	font-weight: bold;
	transition: all ease 0.4s;
}
</style>

<main>
	<section id="main">
		<!--navigation-------------------------------->
		<nav>
		<!--logo--->
		<a href="/" class="logo">LOGO</a>
		<!--menu--------->
		<div class="toggle"></div>
		<ul class="menu">
		<li class="active"><a href="/" >Home</a></li>	
		<li><a href="about">About</a></li>	
		<li><a href="services">Services</a></li>		
		</ul>
		<!--language-->
		<a href="/" class="lang">En</a>
		</nav>
	 
	
	<slot></slot>
</section>
</main>