const multer= require('multer');

// const diskStorage=multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,'uploads/');
//     },
//     filename:function(req,file,cb){
//         cb(null,Date.now()+'-'+file.originalname);
//     }
// })
const memoryStorage=multer.memoryStorage();
const upload=multer({storage:memoryStorage});

module.exports=upload;