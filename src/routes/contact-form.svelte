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
.contact-right button{
	width: 100%;
	height: 50px;
	background-color: #1ED98B;
	font-weight: bold;
	outline: none;
	border: none;
	margin: 0px;
	color:#1B1B1B;
	font-size: 14px;
	text-transform: uppercase;
	letter-spacing: 2px;
 
}
.c-l-heading{
	font-family: calibri;
	color:#FFFFFF;
	font-size: 3rem;
	letter-spacing: 2px;
	font-weight: 400;
	
}
.f-name,.f-email{
	display: flex;
	flex-direction: column;
	font-family: calibri;
	
}
.f-name font,.f-email font{
	color:#BFBFBF;
	font-size: 22px;
}
.f-name input,.f-email input{
	height: 30px;
	width:250px;
	border: none;
	outline: none;
	background-color:transparent;
	border-bottom: 1px solid #929292;
	color:#FFFFFF;
	margin: 10px 0px;
}
.f-email input::placeholder,
.f-name input::placeholder{
	opacity: 0.5;
	letter-spacing: 1px;
}
.f-email input:focus,
.f-name input:focus{
	border-bottom: 1px solid #17d1ac;
	transition: all ease 0.5s;
}.message font{
	font-size: 18px;
	color:#4E4E4E;
	font-family: calibri;
	
}
.message{
	margin: 20px;
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
.contact-right textarea::placeholder{
	color:#EBEBEB;
	font-size: 18px;
	letter-spacing: 2px;
	font-family: calibri;
}
.contact-right button:active{
	transform: scale(1.04);
	transition: all ease 0.1s;
}
    </style>
  <section id="contact-form">
	<form>
	<div class="contact-left">
	<h1 class="c-l-heading"><font style="border-bottom: 3px solid #1ED98B;">Writ</font>e us</h1>
	<!--name-------->
	<div class="f-name">
	<font >Name</font>
	<input type="text" placeholder="Full Name"/>
	</div>
	<!--email-------->
	<div class="f-email">
	<font >Email</font>
	<input type="email" placeholder="Example@gmail.com"/>
	</div>
	</div>
	<div class="contact-right">
	<div class="message">
	<font >Message</font>
	<textarea name="message" rows="5" cols="20" placeholder="Write Message..."></textarea>
	</div>
	<button>submit</button>
	</div>
		
	</form>
	</section>
  