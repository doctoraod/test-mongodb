import moment from 'moment'
import mongoose from 'mongoose'
console.log('Start: ', moment().format('YYYY-MM-DD HH:MM:DD'))
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/test', {useMongoClient: true});

var User = mongoose.model('User', { name: String });

var children = new User({ name: 'Aod' });
// children.save(function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('meow');
//   }
// });

const getUser = async () => {
  const response = await User.find({name: 'Aod'})
  console.log(response)
}
getUser()
