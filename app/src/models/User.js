"use strict"

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body; // 가져와서
    }

    login() {
        const client = this.body; //바디에 아이디값 
        const { id, psword } = UserStorage.getUserInfo(client.id); // 해당하는 정보를 반환

        if(id){
            if (id === client.id && psword === client.psword) {
                return { success: true};
            }
            return  {success: false, msg: "비밀번호가 틀렸습니다."};  
        }
        return { success: false, msg: "존재하지 않는 아이디입니다."};
    }

    register() {
        const client = this.body;
        UserStorage.save(client);
        
    }
}

module.exports = User;