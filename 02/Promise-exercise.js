const getStudent = (id)=>{
    return new Promise((resolove,reject)=>{
        setTimeout(() => {
            let name = 'Yeet';
            if(name){
                resolove({stuid:id,stunmane:name});
            }else{
                reject(new Error('Can not get the result'))
            }
        },2000);
    });
}
getStudent(15)
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err.message);
});