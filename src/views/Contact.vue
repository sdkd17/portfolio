<template>
	<b-container fluid> 
		<b-row class="my-5"> 
			<h1 class="m-auto"> Hablemos </h1>
		</b-row>

		<b-row class="my-5 py-5"> 
			<b-col cols="2"> </b-col>
			<b-col> 
			<b-form ref="form" @submit.prevent="sendMessage" >			
				<b-form-group
					id="input-group-1"
					label-cols="2"
					content-cols="10"		
					label="Nombre:"
					label-for="input-name"
					description=""
				>
					<b-form-input
						name="name"
						id="input-name"
						v-model="form.name"
						type="text"
						placeholder="Ingresa tu nombre"
					>
					</b-form-input>
				</b-form-group>	

				<b-form-group 
					id="input-group-3"
					label-cols="2"
					content-cols="10"					
					label="Email:"
					label-for="input-email"
					description=""
				>
					<b-form-input
						name="email"
						id="input-email"
						v-model="form.email"
						type="email"
						placeholder="Ingresa tu email"
						required
					>
					</b-form-input>
				</b-form-group>

				<b-form-group 
					id="input-group-3"
					label-cols="2"
					content-cols="10"
					label="Asunto:"
					label-for="input-subject"
					description=""
				>
					<b-form-input
						name="subject"
						id="input-subject"
						v-model="form.subject"
						type="text"
						placeholder="Asunto"
						required
					>
					</b-form-input>
				</b-form-group>
	
				<b-form-group 
					id="input-group-4"
					label="Mensaje:"
					label-for="input-message"
					description=""
				>
					<b-form-textarea
						name="message"
						id="input-message"
						v-model="form.message"
						type="textarea"
						placeholder="Escribe tu mensaje"
					>
					</b-form-textarea>
				</b-form-group>

				<b-button type="submit" block>Enviar</b-button>
				
			</b-form>
			</b-col>
			<b-col cols="2"> </b-col>
		</b-row>

		<b-alert 
			:show="show"
			dismissible 
			:variant="variant"
		>
			{{ alertText }}
		</b-alert>
	</b-container>
</template>

<script>
	import emailjs from '@emailjs/browser'

	export default {
		name: 'Contact',
		components: {
			
		},

		data() {
			return {
				form: {
					name: '',
					subject: '',
					email: '',
					message: ''
				},
				show: false,
				variant: 'success',
				alertText: ''
			}
		},
		methods: {
			sendMessage() {
				
				emailjs.sendForm('service_zuwuzli','template_99n75pc', this.$refs.form, '3qtcd7Bkgis7MuhDC')
					.then((result) => {
						this.show = true;
						this.alertText = result.text;
					}, (error) => {
						this.show = true;
						this.variant = 'warning';
						this.alertText = error.text;
					})

			},

		}

	}
</script>