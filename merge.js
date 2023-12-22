const PDFMerger = require('pdf-merger-js');
const path = require('path')


const mergedPdf = async (arr, name) => {
  var merger = new PDFMerger();
  for(let i=0; i<arr.length; i++){
    await merger.add(path.join(__dirname, arr[i].path)); 
  }
  await merger.save(`public/${name}.pdf`); //save under given name and reset the internal document
}

module.exports = ({mergedPdf}); 



