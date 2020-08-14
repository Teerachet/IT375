const myAsyncFunc = async()=>{
    try{
        const result = await Promise.resolve()
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
    const result = await Promise.resolve('Async Funtion');
    console.log(result);
}
myAsyncFunc();