// 
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:2217//RoxLicenseD',(err)=>{
    if(err)
    console.log("MongoDB is ON");
    else
    console.log("Error In MongoDB Connection",+JSON.stringify(err,undefined,2));
});
module.exports=mongoose