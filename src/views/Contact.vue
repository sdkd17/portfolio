<template>
	<b-container fluid> 
		<b-row class="my-5 py-5"> 
			<h1 class="m-auto"> Contact me </h1>
		</b-row>

		<b-row class="my-5 py-5"> 
			<b-form @submit="onSumbit" class="m-auto" >
				<b-row> 
					<b-col> 
						<b-form-group
							id="input-group-1"
							label-cols="4"
							content-cols="8"
							label="Name:"
							label-for="input-name"
							description="Your name"
						>
							<b-form-input
								id="input-name"
								v-model="form.name"
								type="text"
								placeholder="Enter your name"
							>
							</b-form-input>
						</b-form-group>	
					</b-col>
					<b-col>
						<b-form-group 
							id="input-group-2"
							label="Last Name:"
							label-cols="4"
							content-cols="8"
							label-for="input-last-name"
							description="Your Lastname"
						>
							<b-form-input
								id="input-last-name"
								v-model="form.lastname"
								type="text"
								placeholder="Enter your lastname"
								
							>
							</b-form-input>
						</b-form-group>
					</b-col>
				</b-row>

				<b-form-group 
					id="input-group-3"
					label-cols="4"
					content-cols="8"
					label="Email:"
					label-for="input-email"
					description="Your Email"
				>
					<b-form-input
						id="input-email"
						v-model="form.email"
						type="email"
						placeholder="Enter your email"
						required
					>
					</b-form-input>
				</b-form-group>
	
				<b-form-group 
					id="input-group-4"
					label="Message:"
					label-for="input-message"
					description="Your message"
				>
					<b-form-textarea
						id="input-message"
						v-model="form.message"
						type="textarea"
						placeholder="Enter your message"
					>
					</b-form-textarea>
				</b-form-group>

				<b-button type="submit" variant="primary" block>Send Message</b-button>
				
			</b-form>
		</b-row>
	</b-container>
</template>

<script>
	export default {
		name: 'Contact',
		components: {
			
		},

		data() {
			return {
				form: {
					name: '',
					lastname: '',
					email: '',
					message: ''
				}
			}
		},
		methods: {
			onSubmit(event) {
				event.preventdefault()
			},

		}

	}
</script>