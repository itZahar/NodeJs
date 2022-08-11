// const fs = require('fs/promises')
// const path = require("path");
//
// const mainPath = path.join(__dirname,'Mane')
//
// const tidy = async (mainPath) => {
//     const files = await fs.readdir(mainPath)
//     for (const file of files) {
//         const nextPath = path.join(mainPath,file)
//         const stat = await fs.stat(nextPath)
//         if (stat.isFile()){
//             await fs.rename(nextPath,path.join(__dirname,'Mane',file))
//         }
//         if(stat.isDirectory()){
//             tidy(nextPath)
//         }
//     }
// }
//
// tidy(mainPath)




// export const sort = () => {
//     fs.readdir('./boys').then(value => {
//         for (const human of value) {
//             fs.readFile(`./boys/${human}`).then(value1 => {
//                 if (value1.toString().includes('female')){
//                     fs.rename(`./boys/${human}`,`./girls/${human}`)
//                 }
//             })
//         }})
//     fs.readdir('./girls').then(value => {
//         for (const human of value) {
//             fs.readFile(`./girls/${human}`).then(value1 => {
//                 if (!value1.toString().includes('female')){
//                     fs.rename(`./girls/${human}`,`./boys/${human}`)
//                 }
//             })
//         }})
// }



/a










// fs.appendFile('./hello.txt','HELLO \n').then(()=>{
//     console.log('done')
// }).catch(e=>{
//     console.log(e)
// })

// fs.writeFile('./hello.txt','HeY\n').then(()=>{
//     console.log('Very good')
// }).catch(e=>{
//     console.log(e)})

// fs.readFile('./hello.txt').then(data=>{
//     console.log(data)
// })

// fs.unlink('./yeah').then(value => {
//     console.log(value);
// })
//
// fs.mkdir('./yeah').catch(e=>{
//     console.log(e)})

// fs.stat('./hello.txt').then(info=>{
//     console.log(info.isDirectory(),'isDirectory')
//     console.log(info.isFile(),'isFile')
// })

// fs.readdir('./yeah').then(files=>{
//     for (const file of files) {
//         fs.stat(`./yeah/${file}`).then(info=>{
//             if (!info.isFile()){
//                 return;
//             }
//                 fs.readFile(`./yeah/${file}`).then(fileInfo=>{
//                     console.log(`File ${file}`)
//                     console.log(fileInfo.toString())
//                 })
//
//         })
//     }
// })

// fs.rename('./yeah/yoou you/style.css','./yeah/rename.html').catch(e=>{
//     console.log(e)})
// fs.rm('./Dis',{recursive:true}).catch(e=>{
//     console.log(e)})