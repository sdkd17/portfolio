<template>
	<section>
		<b-container fluid> 
			<b-row align-v="center" class="py-5"> 
				<b-col> 				
					<b-container>
						<b-row>
							<b-col cols="1"> </b-col> 
							<b-col> 
								<b-container class="presentation-container"> 
									<h1>Hola!</h1>
									<h4>Soy Sergio, un aficionado a la fotograía al que le cayó una camara 
										en las manos hace unos años y no ha podido parar de usarla. </h4>
								</b-container>
							</b-col>
							<b-col cols="1"> </b-col>
						</b-row>	
					</b-container>
				</b-col>
				<b-col  class="d-none d-lg-block d-md-block "> 
					<b-container> 			
						<b-img thumbnail fluid :src="require('../assets/gente.jpg')" alt="Image 1"></b-img>
					</b-container>
				</b-col>
			</b-row>
		</b-container>
	</section>
</template>

<script>
	export default {
		name: 'Intro',
		components: {

		}
	}
</script>

<style>
	/*@import '../assets/mystyles.css';*/
	

</style>