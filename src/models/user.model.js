
export default class UserAuthModel {

    constructor(_userName,_userEmail,_userPassword){
        this.userName = _userName;
        this.userEmail = _userEmail;
        this.userPassword = _userPassword;
    }

    static addUser({userName,userEmail,userPassword}){
       const userAccount = users.find(user=>user.userEmail === userEmail);
        if(!userAccount){
            users.push({userName,userEmail,userPassword})
            return null;
        }
        else{
            return 'Email is already linked with another account!'
        }
    }

    static checkUserAccount({userEmail,userPassword}){
        const userAccount = users.find(user=>user.userEmail === userEmail);
        if(userAccount){
            if(userAccount.userPassword === userPassword){
                return null;
            }else{
            return 'Password does not match, Please Try again!'
            }
        }else{
            return 'Account does not exist, Please Sign-up!'
        }
    }

}

const users = [
    {
        userName:"John Doe",
        userEmail:"johndoe@gmail.com",
        userPassword:"Johndoe123",
    }
]