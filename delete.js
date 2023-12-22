const fs = require('fs');

const deleteFiles = (path)=>{
    fs.readdir(path, (err, files) => {
        files.forEach((file) => { 
          fs.unlinkSync(path + file)
        });
    });  
}  

module.exports = ({deleteFiles}); 