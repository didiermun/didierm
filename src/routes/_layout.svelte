<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>




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
		<li><a href="contact-form">Contact</a></li>	
		</ul>
		<!--language-->
		<a href="/" class="lang">En</a>
		</nav>
	 
	
	<slot></slot>
</section>
</main>