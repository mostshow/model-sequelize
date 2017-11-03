
import fs from 'fs'
import db from './db'

let files = fs.readdirSync(__dirname + '/models');

let js_files = files.filter((f)=>{
    return f.endsWith('.js');
}, files);

let models = {}


for (let file of js_files) {
    console.log(`import model from file ${file}...`);
    let name = file.substring(0, file.length - 3);
    models[name] = require(__dirname + '/models/' + file).default;
}

models.sync = () => {
    db.sync();
};

export default models;
