import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import Count from './models/count.js'

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const database = mongoose.connection
database.on('error', err => console.error(err))
database.on('open', () => console.log('Connected to database'))

app.get('/', async (req, res) => {
	const countList = await Count.find()
	if (countList.length > 0){
		const countObj = countList[0]
		countObj.count += 1
		countObj.save()

		res.json(countObj)
	}
	else {
		const countObj = new Count({ count: 1 })
		countObj.save()

		res.json(countObj)
	}
})

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`))
