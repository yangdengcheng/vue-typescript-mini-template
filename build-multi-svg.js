'use strict'
const fs = require('fs');
const path = require('path');
const argv = require('yargs').argv;

const svgFileDir = path.join(__dirname, './src/icons/components/'); // SVG文件目录

const fileName = argv.filename; // 需要修改的SVG文件名

function replaceFileAttr(fileDir) {
    fs.readFile(fileDir, 'utf8', function(err, data){
        let result = '';
        if (err) return err;
        result = data.replace(/_fill/g, 'fill');
        fs.writeFile(fileDir, result, 'utf8', function(error) {
            if (error) return error
        })
    })
}

if (!fileName) {
    return new Error('Please input the fileName，Example："node run build:multi-svg -- --filename=${fileName}.ts"')
} else {
    // eslint-disable-next-line handle-callback-err
    fs.stat(svgFileDir + fileName, function(err, stat) {
        if (stat && stat.isFile()) {
            replaceFileAttr(svgFileDir + fileName)
            console.log('Build successfully！')
        } else {
            return new Error('File is not existed!')
        }
    })
}
