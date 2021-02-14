const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://kibi11:${password}@cluster0.hcleb.mongodb.net/Meme-data?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const MemeSchema = new mongoose.Schema({
    caption: String,
    link: String,
    author: String
  })

const Meme = mongoose.model('Meme', MemeSchema)

const p = new Meme({
  caption : process.argv[3],
  link: process.argv[4],
  author: process.argv[5]
})

if(process.argv.length == 3)
{
  console.log("Phonebook: ");

  Meme.find({}).then(item => {
    console.log("this is the item I'm talking about", item);
    item.forEach((a, i) => {
      console.log(`${a.caption} ${a.link} ${a.author}`);

    });
    mongoose.connection.close()

  })

}
else if(process.argv.length > 3)
{
  p.save().then(result => {
    console.log(`added ${process.argv[3]} number ${process.argv[4]} ${process.argv[5]}to phonebook`)
    mongoose.connection.close()
  })

}
