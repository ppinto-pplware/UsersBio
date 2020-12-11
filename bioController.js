//Import Bio Model
Bio = require('./bioModel');

// index
exports.index = function (req, res) {
    Bio.get(function (err, bio) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "successs",
            message: "Obter Bios com sucesso",
            data: bio       
        });
    });
};

//NOVA Bio
exports.add = function (req, res) {
    var bio = new Bio();
    bio.nome = req.body.nome;
    bio.email = req.body.email;
    bio.telef = req.body.telef;
    bio.morada = req.body.morada;

    //Guardar e verificar erros
    bio.save(function (err) {
        if (err)
            res.json(err);

        res.json({
            message: "Nova Bio adicionada",
            data: bio
        });
    });
};

// Ver Bio
exports.view = function (req, res) {
    Bio.findById(req.params.bio_id, function (err, bio) {
        if (err)
            res.send(err);
        res.json({
            message: 'Detalhes da Bio',
            data: bio
        });
    });
};

// Atualizar Bio
exports.update = function (req, res) {
    Bio.findById(req.params.bio_id, function (err, bio) {
        if (err)
            res.send(err);
        bio.nome = req.body.nome;
        bio.email = req.body.email;
        bio.telef = req.body.telef;
        bio.morada = req.body.morada;

        //Guardar e verificar erros
        bio.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "Bio Atualizada com sucesso",
                data: bio
            });
        });
    });
};

// Apagar Bio
exports.delete = function (req, res) {
    Bio.deleteOne({
        _id: req.params.bio_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
          //  status: "sucesso",
            message: 'Bio Apagada com Sucesso.'
        });
    });
};