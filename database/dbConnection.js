import  mongoose  from "mongoose";


const dbConnection = ()=> {
    mongoose.connect(process.env.MONGODB_URI, {
        dbName: "PORTFOLIO-FULL-STACK"
    }).then(()=>{
        console.log("Connected to database."); 
    }).catch((error)=> {
        console.log(`Some Error Occured While Connecting To Database: ${error}`);
    })
}

export default dbConnection