"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//import {helloword} from '../controllers/photo.controller'
const photo_controller_1 = require("../controllers/photo.controller");
const multer_1 = __importDefault(require("../libs/multer"));
const router = (0, express_1.Router)();
//router.route('/').get(helloword);
router.route('/photos')
    .post(multer_1.default.single('image'), photo_controller_1.createPhoto)
    .get(photo_controller_1.getPhotos);
exports.default = router;
