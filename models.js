const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/restfulTaskAPIdb", { useNewUrlParser : true });

const TaskSchema = new mongoose.Schema({ 
    title : { type : String },
    description : { type : String },
    completed : { type : Boolean },
},
{
    timestamps : true
})

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;