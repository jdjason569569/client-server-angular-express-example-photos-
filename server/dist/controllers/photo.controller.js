"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPhoto = exports.getPhotos = void 0;
// export function helloword(req: Request,res: Response){
//     return res.json({
//         resp: 'hola desde el servidor'
//     })
// }
function getPhotos(req, res) {
    return res.json({
        message: 'list photos'
    });
}
exports.getPhotos = getPhotos;
function createPhoto(req, res) {
    return res.json({
        message: 'photo successfully saved'
    });
}
exports.createPhoto = createPhoto;
