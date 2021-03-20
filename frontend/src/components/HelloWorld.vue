<template>
	<div>
		<h1>View Count: {{ count }}</h1>
	</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
	data: () => {
		return {
			count: 'Loading...'
		}
	},
	async beforeCreate() {
		const url = 'http://localhost:3000/'
		const res = await axios.get(url)
		this.count = res.data.count
	}
}
</script>
