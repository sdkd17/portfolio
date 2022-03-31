<template>
	<b-container fluid class="work p-2 m-4"> 
		<b-row>  
			<b-col cols="2"> <h1>{{ work }}</h1> </b-col>
			<b-col> <b-img :src="require(`../assets/${work}.jpg`)"> </b-img> </b-col>
			<b-col cols="2"> </b-col>
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
