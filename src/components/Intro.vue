<template>
	<section>
		<b-container fluid> 
			<b-row align-v="center" class="py-5"> 
				<b-col> 				
					<b-container>
						
						<b-row align-v="center"> 
							<b-col> </b-col>
							<b-col> 
								<b-container> 
									<h1>Title</h1>
									<p>Description</p>
								</b-container>
							</b-col>
							<b-col> </b-col>
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