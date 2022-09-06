//importar a mongoose

import mongoose from "mongoose";

//M e conecto a la bd
export async function conectar(){
    try{
        await mongoose.connect(process.env.DATABASE);
        console.log("exito conetando")

        }catch(error) {
            console.log("upsss"+error)
        }
}

