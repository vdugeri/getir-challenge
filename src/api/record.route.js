const filterTask = require('./record.controller');

const filterRoutes = router => {
	router.post('/filter', filterTask);
}


module.exports = filterRoutes;