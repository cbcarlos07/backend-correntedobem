import multer from 'multer'
import path from 'path'
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, path.resolve('public'))
    },
    filename: (req, file, cb) =>{
        const arrFile = file.originalname.split('.')
        const name = toTimestamp()
        const fileName = `${name}.${arrFile[ arrFile.length - 1  ]}`            
        cb(null, fileName)        
    }
})
const uploads = multer({storage})

const toTimestamp = ()=>{
    return Math.round(new Date().getTime()/1000);;
}

export default uploads