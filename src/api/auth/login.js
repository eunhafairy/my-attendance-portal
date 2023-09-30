//mock
export const login = (username, password, source) => {

    return new Promise( (resolve, reject) => {
        setTimeout(()=>{            

            if(username && password){

                if(username === 'user' && password === 'admin'){
                    resolve({
                        status: 200,
                        message: "success"
                    })
                }
                else{
                    reject({
                        status: 401,
                        message: 'unauthorized'
                    })    
                }
            }
            else{
                reject({
                    status: 400,
                    message: 'bad request'
                })
            }
        }, [2000])
    })

}