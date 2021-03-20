import mongoose from 'mongoose'

const countSchema = new mongoose.Schema({
	count: {
		type: Number,
		required: true
	}
})

export default mongoose.model('Count', countSchema)
