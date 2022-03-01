//import {Schema, model, Document} from 'mongoose';
const mongoose = require('mongoose');

const schema = mongoose.Schema({
    title: String,
    description: String,
    imagePath: String
});

interface Iphoto extends Document{
    title: string;
    description: string;
    imagePath: string;
}


//export default model<Iphoto>('photo', schema);
export default mongoose.model('photo', schema);



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