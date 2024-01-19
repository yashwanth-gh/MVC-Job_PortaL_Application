import UserAuthModel from "../models/user.model.js";

export default class AuthController{
    getSignUp(req,res,next){
        res.render('sign_up',{errors:null,accountError:null});
    }

    getSignIn(req,res,next){
        res.render('sign_in',{errors:null,accountError:null});
    }
    postSignUp(req,res,next){
        const modelMessage = UserAuthModel.addUser(req.body);
        if(modelMessage){
            return res.render('sign_up',{errors:null,accountError:modelMessage});
        }
        res.redirect("/signin");
    }

    postSignIn(req,res,next){
        const modelMessage = UserAuthModel.checkUserAccount(req.body);
        if(modelMessage){
            return res.render('sign_in',{errors:null,accountError:modelMessage});
        }
        const user = UserAuthModel.getAccount(req.body.userEmail);
        req.session.userEmail = user.userEmail;
        req.session.userName = user.userName;
        res.redirect("/")
    }

    
}