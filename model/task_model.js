var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    _id:{type:Schema.Types.ObjectId,required:true},
    createDate:{type:Schema.Types.Date},
    dueDate:{ day: Number, month: Number ,year:Number  },
    taskName:{type:Schema.Types.String},
    priority:{type:Schema.Types.String},
    description:{type:Schema.Types.String}
    
});



module.exports = mongoose.model('Task', TaskSchema);