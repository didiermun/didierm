

<style>
	*{
		font-family: Hack, monospace;
	}
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
	min-height: 100vh;
	box-sizing: border-box;
	background-color: #f9fcfb;
	overflow-x: hidden;
	overflow-y: hidden;
}
nav{
	display:flex;
	justify-content: space-between;
	align-items: center;
	text-transform: uppercase;
	font-weight: 600;
	letter-spacing: 2px;
	position: fixed;
	top: 0;
	left: 0;
	width:100%;
	box-sizing: border-box;
	padding: 10px 50px;
	background-color:#f9fcfb;
	box-shadow:2px 2px 12px #e1f4f3; 
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
	color:#ff971d;
	font-family:Hack;
}
.toggle{
	display: none;
}
.menu li a:hover{
	background-color:#ff971d;
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
		<a href="/" class="logo">Didier</a>
		<!--menu--------->
		<div class="toggle"></div>
		<ul class="menu">
		<li class="active"><a href="/" >Home</a></li>	
		<li><a href="about">About</a></li>	
		<li><a href="services">Services</a></li>		
		</ul>
		<!--language-->
		<a href="/" class="lang" style="font-size:13px;text-transform: none;">English</a>
		</nav>
	 
	
	<slot></slot>
	
</section>
</main>