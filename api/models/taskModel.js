const mongoose = require('mongoose');
const { Schema } = mongoose;

//Schema to follow for the inserted data
const taskSchema = new Schema(
  {
    task1: {
      type: String,
      required: 'task1 cannot be blank'
    },
    task2: {
      type: String,
      required: 'task2  cannot be blank'
    }
  },
  //Defines the collection to which the tasks will be added
  { collection: 'task' } 
);

module.exports = mongoose.model('task', taskSchema);
