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
.contact-right{
	width: 60%;
	height: 100%;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-left: 1px solid rgba(255,255,255,0.08);
}
.contact-right textarea{
	width: 100% !important;
	height: 320px !important;
	border: none;
	outline: none;
	background-color:transparent;
	box-sizing: border-box;
	color:#EBEBEB;
	font-size: 16px;
}
    </style>
  <section id="contact-form">
	<form>
	<div class="contact-left">
	<h1 class="c-l-heading"><font style="border-bottom: 3px solid #1ED98B;">Writ</font>e us</h1>
	<div class="f-name">
	<input type="text" placeholder="Full Name"/>
	</div>
	<div class="f-email">
	<font >Email</font>
	<input type="email" placeholder="Example@gmail.com"/>
	</div>
	</div>
	<div class="contact-right">
	<div class="message">
	<font >Message</font>
	<textarea name="message" rows="5" cols="20" placeholder="Write Message..."></textarea>
	
		
	</form>
	</section>
  