const comprarCasco = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("comprar casco");
        },1000);
    })
}

const comprarGuantes = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("comprar guantes");
        },3000);
    })
}

const pasiar = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("pasear en bici");
        },8000);
    })
}

const pasearEnBici = async ()=>{
    const casco= await comprarCasco();
    const guantes = await comprarGuantes();
    const paseo =await pasiar();

    return ([casco,guantes,paseo]);
}

pasearEnBici().then(res=>console.log(res));