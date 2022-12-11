const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	try{

		await fs.writeFile(fileName,fileContent,(data)=>{

			console.log(data)
		})

	}
	catch(err){

		console.log(err)
	}


}


const myFileReader = async(fileName) => {
	
 try{
	let data=await fs.readFile(fileName)
	console.log(data.toString())
 }
 catch(err){
	console.log(err)
 }

}


const myFileUpdater = async (fileName, fileContent) => {
	try{
		await fs.appendFile(fileName,fileContent)
	}
   catch(err){
	console.log(err)
   }
}

const myFileDeleter = async (fileName) => {
	
	try{
		await fs.unlink(fileName)
	}
	catch(err){
		console.log(err)
	}
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }

// myFileWriter('file.txt',"Hello")
