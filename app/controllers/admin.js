module.exports.admin = function(app, req, res){
	if (req.session.loggedinAdmin) {
        if (req.query.notificacao) {
            if (req.query.notificacao === 'Login Realizado') {
                var mensagem = 'Você entrou como administrador. Seja bem-vindo(a)!';
            }
            res.render('admin/admin', {mensagem: mensagem});
        } else {
            res.render('admin/admin', {mensagem: {}});
        }
    } else {
        res.redirect('/login_adm');
    }
}

module.exports.logout_admin = function(app, req, res){
    req.session.destroy();
    res.redirect('/');
}