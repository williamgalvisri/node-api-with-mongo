const fs = require('fs');
const { route } = require('./users');
const { error } = require('console');
const router = require('express').Router();
const pathRouter = `${__dirname}`;

const removeExtension = (file) => {
    return file.split('.').slice(0, -1).join('.');
}

fs.readdirSync(pathRouter)
.filter((file) => {
    const fileWithoutExtension = removeExtension(file);
    const skip = ['main', 'index'].includes(fileWithoutExtension);

    if(!skip) {
        router.use(`/${fileWithoutExtension}`, require(`./${fileWithoutExtension}`));
        console.log('started route ----->', fileWithoutExtension);
    }
});

router.get('*', (req, res) => {
    res.status(404);
    res.send({error: 'Not found'});
})

module.exports = router;