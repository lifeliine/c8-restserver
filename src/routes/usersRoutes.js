const {Router} = require('express');
const {getApi,postApi,putApi,patchApi,deleteApi} = require('../controlers/userControlers');


const router = Router();

router.get('/',getApi);
router.post('/',postApi);
router.put('/:id',putApi);
router.patch('/:id',patchApi);
router.delete('/:id',deleteApi);

module.exports = router;