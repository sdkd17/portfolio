<template>
	<b-container fluid class="project p-5"> 
		<b-row align-h="center" class="pb-2">  
				<b-link to='/galery'>{{ project }}</b-link>
		</b-row>
		<b-row align-h="center">			
				<b-img thumbnail :src="require(`../assets/${project.toLowerCase()}.jpg`)"> </b-img> 
		</b-row>	
	</b-container>
</template>

<script>
	export default {
		name: 'Project',
		components: {

		},
		props: {
			project: String,
		}
	}
</script>

<style>

</style>
