const TaskDao = require("./record.dao");

const filterTasks = async (req, res)  => {
	const filterParams = req.body;

	try {
		const tasks = await TaskDao.filterTasks(filterParams);
		return res.status(200).json({
			code: 0,
			message: "Success",
			records: tasks
		});
	} catch (error) {
		return res.status(500).json({
			code: 2,
			message: error.message
		});
	}
}


module.exports = filterTasks;