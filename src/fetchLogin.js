export async function login({ username, password}){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (username === 'cesar' && password === "password"){
                resolve();
            }else {
                reject();
            }
        }, 1000)
    })
};