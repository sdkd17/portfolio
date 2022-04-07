<template>
	<b-container fluid class="work p-2 m-5"> 
		<b-row class="p-5">  
			<b-col cols="2" class="pl-5">
				<b-link href="#foo">{{ work }}</b-link>
			</b-col>
			<b-col class="p-5"> 
				<b-img thumbnail :src="require(`../assets/${work.toLowerCase()}.jpg`)"> </b-img> 
			</b-col>
		</b-row>	
	</b-container>
</template>

<script>
	export default {
		name: 'Work',
		components: {

		},
		props: {
			work: String,
		}
	}
</script>

<style>

</style>
