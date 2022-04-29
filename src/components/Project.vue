<template>
	<b-container fluid class="project p-5"> 
		<b-row align-h="center" class="pb-1">  
				<h3>{{ projectName}}</h3>
		</b-row>
		<b-row align-h="center">			
				<b-img thumbnail :src="imgSrc"> </b-img> 
		</b-row>	
	</b-container>
</template>

<script>
	export default {
		name: 'Project',
		components: {

		},
		props: {
			projectName: String,
			imgSrc: String
		}
	}
</script>

<style>

</style>
