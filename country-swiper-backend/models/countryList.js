const mongoose = require('mongoose')

const countryListSchema = mongoose.Schema({
  countries: [{}],
  approved: [{}]
})

countryListSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('CountryList', countryListSchema)
