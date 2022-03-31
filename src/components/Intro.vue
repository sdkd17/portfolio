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
									<h1>Title!</h1>
									<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h4>
								</b-container>
							</b-col>
							<b-col cols="1"> </b-col>
						</b-row>	
					</b-container>
				</b-col>
				<b-col> 
					<b-container> 			
						<b-img thumbnail fluid :src="require('../assets/papa.jpg')" alt="Image 1"></b-img>
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