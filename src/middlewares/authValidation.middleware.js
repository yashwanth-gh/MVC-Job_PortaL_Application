import { body, validationResult } from "express-validator"


export const authValidation = async (req, res, next) => {
    
    const rules = [
        body('userEmail').isEmail().withMessage("Enter valid E-mail"),
        /*         
        body('applicantPhone').isMobilePhone("en-IN").withMessage("Enter valid E-mail"),
        body('applicantResume').custom((value, { req }) => {
            if (!req.file) {
                throw new Error('Resume file is required');
            }
            return true;
        }) 
        */
    ]

    if (req.path === '/signup'){
        rules.push(body('userName').notEmpty().withMessage('Full Name is required'))
    }

    if(req.path == '/signin'){
        rules.push(body('userPassword')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters long')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
        .withMessage('Password must contain at least one uppercase letter, one lowercase letter, and one digit')
   )}


    await Promise.all(rules.map(rule => rule.run(req)));
    var errors = validationResult(req);

    if (!errors.isEmpty()) {
        if (req.path === '/signup') return res.render('sign_up',{errors:errors.array(),accountError:null});
        if (req.path === '/signin') return res.render('sign_in',{errors:errors.array(),accountError:null});
    }
    next();
}