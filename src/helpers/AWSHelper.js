import aws from 'aws-sdk'
import AwsService from '../service/AwsService'
const BUCKET = process.env.BUCKET
const awsConfig =  () => {
    return new Promise((resolve, reject)=>{
         AwsService.findAll()
            .then(response=> {
                //console.log('response aws', response[0]);
                resolve(response[0])
            })
    })
}

const s3Config = () => {
    return new Promise(async (resolve, reject)=>{
        const s3Obj = await awsConfig()        
        const s3Data = new aws.S3({
            accessKeyId: s3Obj.key_id,
            secretAccessKey: s3Obj.access_key
        })
        resolve( s3Data )
    })
}

const uploadToAWS = async (fileName, fileB64) => {
    //const fileContent = fs.readFileSync(fileName);
    const fileContent = Buffer.from(fileB64, "base64");
    // Setting up S3 upload parameters
    await awsConfig()
    const params = {
        Bucket: BUCKET,
        Key: fileName, // File name you want to save as in S3
        Body: fileContent
    };
    const s3 = await s3Config()
    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            console.log('erro upload',err);
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
}

const getImage =  image => {
    return new Promise(async (resolve, reject)=>{
        await awsConfig()
        const s3 = await s3Config()
        const data =  s3.getObject(
            {
                Bucket: BUCKET,
                Key: image
            }
            
        )
          resolve( data );
    })
}

const deleteImg = async image => {
    try{
        
        await awsConfig()
        const s3 = await s3Config()
        const params = {
            Bucket: BUCKET,
            Key: image
        }
        s3.deleteObject(params, function(err, data) {
            if (err) {
                //console.log('remove', err.stack)
                console.log('Falha ao remover', image)
            } // error
            else     console.log('Removido');                 // deleted
        });
    }catch(e){
        console.log('Erro ao remover imagem');
    }
}

export {uploadToAWS, getImage, deleteImg}