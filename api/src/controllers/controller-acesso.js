function controleAcesso(req,res,next){
    if(!req.session.user){
        return res.status(401).json({mensagem: "Acesso não autorizado, faça login!"});
    }
    next()
}

module.exports = controleAcesso;