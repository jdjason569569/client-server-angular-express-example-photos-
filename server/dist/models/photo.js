"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import {Schema, model, Document} from 'mongoose';
const mongoose = require('mongoose');
const schema = mongoose.Schema({
    title: String,
    description: String,
    imagePath: String
});
//export default model<Iphoto>('photo', schema);
exports.default = mongoose.model('photo', schema);
//OR
// import {Schema, model, Document } from 'mongoose';
// const schema = new Schema({
//     title: String,
//     description: String,
//     imagePath: String
// });
// interface Iphoto extends Document{
//     title: string;
//     description: string;
//     imagePath: string;
// }
// export default model<Iphoto>('photo', schema);
