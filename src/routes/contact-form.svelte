<svelte:head>
	<title>About</title>
</svelte:head>
<script>
	import successkid from 'images/successkid.jpg';
</script>
<style>
    #contact-form{
	width: 100%;
	height: 90vh;
	display: flex;
	justify-content: center;
	align-items: center;
	
}
#contact-form form{
	display: flex;
	width: 70%;
	height: 60vh;
	background-color: #1A1A1A;
	box-shadow: 2px 12px 20px rgba(0,0,0,0.2);
	border: 1px solid rgba(255,255,255,0.01)
}
 
.contact-left{
	width: 40%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
    </style>
  <section id="contact-form">
	<form>
	<div class="contact-left">
	<h1 class="c-l-heading"><font style="border-bottom: 3px solid #1ED98B;">Writ</font>e us</h1>
	<div class="f-email">
	<font >Email</font>
	<input type="email" placeholder="Example@gmail.com"/>
	</div>
</div>
		
	</form>
	</section>
  