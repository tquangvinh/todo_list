const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    email: String,
    password: String,
    full_name: String,

});

const workSchema = Schema({

    name_work: String,
    person_: { type: Schema.Types.ObjectId, ref: 'user' }
});

const Story = mongoose.model('work', workSchema);
const Person = mongoose.model('user', userSchema)

module.exports.Story = Story;
module.exports.Person = Person;