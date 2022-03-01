
import {Request, Response} from 'express';
import photo from '../models/photo';
import path from 'path';
import fs from 'fs-extra';

// export function helloword(req: Request,res: Response){
//     return res.json({
//         resp: 'hola desde el servidor'
//     })
// }
export async function getPhotos(req: Request,res: Response): Promise<Response>{
       
    const photos = await photo.find();
    return res.json(photos);
}
export async function createPhoto(req: Request,res: Response): Promise<Response>{

    const {title, description} = req.body;
    const newPhoto = {
        title : title,
        description: description,
        imagePath: req.file!.path
    };
    const foto = new photo(newPhoto);
    await foto.save();
    return res.json({
        message: 'photo successfully saved',
        photo
    });
}

export async function getPhoto(req: Request,res: Response): Promise<Response>{
    const foto = await photo.findById(req.params.id);
    return res.json({
       foto
    });
}

export async function deletePhoto(req: Request,res: Response): Promise<Response>{
    const foto = await photo.findByIdAndRemove(req.params.id);
    if(foto){
        await fs.unlink(path.resolve(foto.imagePath))
    }
    return res.json({
        message: 'photo deleted',
        foto
    });
}

export async function updatePhoto(req: Request,res: Response): Promise<Response>{
    const {id} = req.params;
    const {title, description} = req.body;
    const updatePhoto = await photo.findByIdAndUpdate(id, {
        title, description
    }, {new: true});
    return res.json({
        message: 'photo updated',
        updatePhoto
    });
}


