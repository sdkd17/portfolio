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
									<h4>Soy Sergio, un aficionado a la fotograía al que le apareció una camara 
										en las manos hace unos años y no ha podido parar de usarla. </h4>
								</b-container>
							</b-col>
							<b-col cols="1"> </b-col>
						</b-row>	
					</b-container>
				</b-col>
				<b-col class="d-none d-lg-block d-md-block "> 
					<b-container> 			
						<b-img thumbnail fluid :src="imgSrc" alt="Image 1"></b-img>
					</b-container>
				</b-col>
			</b-row>
		</b-container>
	</section>
</template>

<script>
	import firebaseApp  from "@/firebaseInit.js";
	import {ref, getStorage, getDownloadURL} from "firebase/storage"

	export default {
		name: 'Intro',
		components: {

		},
		data(){
			return {
				imgSrc: null
			}
		},
		mounted(){
			const storage = getStorage(firebaseApp);
			getDownloadURL(ref(storage, "intro.jpg"))
			.then( (url) => {
					this.imgSrc = url
				})
			.catch( (error) => {
				console.error(error)
			})
		}
	}

</script>

<style>
	/*@import '../assets/mystyles.css';*/
	

</style>