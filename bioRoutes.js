//initialize express router
let router = require('express').Router();

//Default API (Resposta)
router.get('/', function(req, res) {
    res.json({
        status: 'API OK',
        message: 'BioApp'
    });
});

//Importar Controlador
var bioController = require('./bioController');

// Bio routes
router.route('/bio')
    .get(bioController.index)
    .post(bioController.add);

router.route('/bio/:bio_id')
    .get(bioController.view)
    .patch(bioController.update)
    .put(bioController.update)
    .delete(bioController.delete);

//Export API routes
module.exports = router;
