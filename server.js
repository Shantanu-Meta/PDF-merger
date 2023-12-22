const express = require('express')
const path = require('path')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/'})
const {mergedPdf} = require('./merge'); 
const {deleteFiles} = require('./delete'); 
const app = express()
const port = 3000
app.use('/static', express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "template/index.html"))
})

app.post('/merge', upload.array('pdfs'), async (req, res, next)=> {
    let arr = req.files; 
    let name = new Date().getTime(); 
    await mergedPdf(arr, name); 
    res.redirect(`http://localhost:3000/static/${name}.pdf`);
    deleteFiles("./uploads/"); 
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})