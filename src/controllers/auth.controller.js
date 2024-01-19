import UserAuthModel from "../models/user.model.js";

export default class AuthController {
    getSignUp(req, res, next) {
        const user = req.session.user || null;
        res.render('sign_up', { errors: null, accountError: null ,user});
    }

    getSignIn(req, res, next) {
        const user = req.session.user || null;
        res.render('sign_in', { errors: null, accountError: null,user });
    }
    postSignUp(req, res, next) {
        const modelMessage = UserAuthModel.addUser(req.body);
        if (modelMessage) {
            const user = req.session.user || null;
            return res.render('sign_up', { errors: null, accountError: modelMessage ,user});
        }
        res.redirect("/signin");
    }

    postSignIn(req, res, next) {
        const modelMessage = UserAuthModel.checkUserAccount(req.body);
        if (modelMessage) {
            const user = req.session.user || null;
            return res.render('sign_in', { errors: null, accountError: modelMessage,user });
        }
        const user = UserAuthModel.getAccount(req.body.userEmail);

        //* -- storing data in session 
        console.log(user)
        req.session.user = user;

        res.redirect("/")
    }

    logout(req, res) {

        //* -- clearing stored data in locals 
        req.session.user = null;
        req.session.destroy((err) => {
            if (err) {
                console.log(err);
            } else {
                res.redirect("/");
            }
        })

    }


}