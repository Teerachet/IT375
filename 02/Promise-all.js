const myPromise1 = new Promise((resolove,reject)=>{
    setTimeout(() => {
        console.log('First');
        resolove(1);
    },3000);
});
const myPromise2 = new Promise((resolove,reject)=>{
    setTimeout(() => {
        console.log('Second');
        ///resolove(2);
        reject(new Error('Yeet!!!'))
    },2000);
});
Promise.all([myPromise1,myPromise2])
.then((results)=>{
    console.log(results);
})
.catch((error)=>{
    console.log(error.message);
});