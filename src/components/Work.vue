<template>
	<b-container class="work m-0 p-5"> 
		<b-row> 
			<h1>{{ work }}</h1>
		</b-row>
		<b-row> 
			<b-col cols="2"> </b-col>
			<b-col> <b-img fluid :src="require(`../assets/${work}.jpg`)"> </b-img> </b-col>
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
