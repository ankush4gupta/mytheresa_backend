const mongoose  =  require("mongoose");
module.exports = ()=>{
    return mongoose.connect("mongodb+srv://ankush:ankush123@cluster0.hsrb6.mongodb.net/mytheresa?retryWrites=true&w=majority")
}