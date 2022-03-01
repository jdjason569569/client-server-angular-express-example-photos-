import app from './app';
const conectarDB = require('./database');


async function main(){
    conectarDB();
    await app.listen(app.get('port'));
    console.log('server in port -> ',app.get('port'));
}
main();
