import JWT from 'jsonwebtoken'

//Protected Routes token base
export const requireSignIn = async (req,res,next)=>{
    const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET)
}