import fs from 'fs'
import path from 'path'
export default {
    convertToImg(filename, base64File){
        const base64Data = base64File.replace(/^data:image\/png;base64,/,"")
        let local = path.resolve('./public',`${filename}`)
        fs.writeFile(local, base64Data, 'base64', (err)=>{
            console.log(err);
        })
    },
    remove(filename){
        let local = path.resolve('./public',`${filename}`)
        try {
            fs.unlinkSync(local)
        } catch (error) {
            console.log(`Error removindo file '${filename}': `,error);
        }
    }
}