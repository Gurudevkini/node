//Async
const {readFile , writeFile }= require("fs")

readFile('./FILEREGISTER/second.txt','utf-8',(err, res) =>{
    if(err)
    {
        return
    }
    console.log(res)
})


writeFile('./FILEREGISTER/second.txt','Maruti',(err)=>
{
    if(err){
        return
    }
})

readFile('./FILEREGISTER/second.txt','utf-8',(err, res) =>{
    if(err)
    {
        return
    }
    console.log(res)
})