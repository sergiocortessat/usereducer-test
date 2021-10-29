interface ILogin {
    username: string,
    password: string,
}

const login = async({username, password}: ILogin) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'admin' && password === 'admin') {
                resolve({
                    token: '1234567890',
                    user: {
                        name: 'Admin',
                        email: 'test@gmail.com',
                    }
    })
            } else {
                reject('Invalid username or password')
            }
        }, 1000)
    })
}

export default login;