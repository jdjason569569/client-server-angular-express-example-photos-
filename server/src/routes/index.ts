import {Router} from 'express';
//import {helloword} from '../controllers/photo.controller'
import {createPhoto, getPhotos, getPhoto, deletePhoto, updatePhoto} from '../controllers/photo.controller'
import multer from '../libs/multer';


const router = Router();

//router.route('/').get(helloword);
router.route('/photos')
.post(multer.single('file'),createPhoto)
.get(getPhotos);

router.route('/photos/:id')
.get(getPhoto)
.delete(deletePhoto)
.put(updatePhoto)

export default router;