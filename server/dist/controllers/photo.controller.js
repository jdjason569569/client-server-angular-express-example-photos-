"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePhoto = exports.deletePhoto = exports.getPhoto = exports.createPhoto = exports.getPhotos = void 0;
const photo_1 = __importDefault(require("../models/photo"));
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
// export function helloword(req: Request,res: Response){
//     return res.json({
//         resp: 'hola desde el servidor'
//     })
// }
async function getPhotos(req, res) {
    const photos = await photo_1.default.find();
    return res.json(photos);
}
exports.getPhotos = getPhotos;
async function createPhoto(req, res) {
    const { title, description } = req.body;
    const newPhoto = {
        title: title,
        description: description,
        imagePath: req.file.path
    };
    const foto = new photo_1.default(newPhoto);
    await foto.save();
    return res.json({
        message: 'photo successfully saved',
        photo: photo_1.default
    });
}
exports.createPhoto = createPhoto;
async function getPhoto(req, res) {
    const foto = await photo_1.default.findById(req.params.id);
    return res.json({
        foto
    });
}
exports.getPhoto = getPhoto;
async function deletePhoto(req, res) {
    const foto = await photo_1.default.findByIdAndRemove(req.params.id);
    if (foto) {
        await fs_extra_1.default.unlink(path_1.default.resolve(foto.imagePath));
    }
    return res.json({
        message: 'photo deleted',
        foto
    });
}
exports.deletePhoto = deletePhoto;
async function updatePhoto(req, res) {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatePhoto = await photo_1.default.findByIdAndUpdate(id, {
        title, description
    }, { new: true });
    return res.json({
        message: 'photo updated',
        updatePhoto
    });
}
exports.updatePhoto = updatePhoto;
