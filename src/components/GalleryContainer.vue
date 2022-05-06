<template>
	<div
		class="gallery-container"
	>
		<div class="img-wrap my-3"
			v-for="img in imgs" 
			:key="img"
			
		>
			<b-img
				:src="img"
				alt="img"
				thumbnail
				@click="handleModal(img)"
			/>
		</div>  


		<b-modal 
			v-model="modalShow"
			lazy 
			modal-class="modal"
			size="lg"
			hide-footer
		>
			<b-container fluid> 
				<b-img
					v-if="modalShow" 
					:src="imgSelected" 
					alt="imagen" 
					thumbnail 
				/>
			</b-container>
</b-modal>     
	</div>




	
</template>

<script>
	export default {
		name: 'GalleryContainer',
		components: {},
		props: {
			imgs: Array
		},
		data(){
			return{
				modalShow: false,
				imgSelected: '',
			}
		},
		methods: {
			handleModal(img) {
			this.modalShow = !this.modalShow
			this.imgSelected = img.replace(/small/,'big')
			// console.log(img)
		},
		}
	}
</script>