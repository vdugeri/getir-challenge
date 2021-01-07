
const RecordModel = require('./record.model');


class RecordDao {
	static async filterTasks(filterParams) {
		RecordDao.validateParams(filterParams);
		
		const { startDate, endDate, minCount, maxCount } = filterParams;
	
		let records = await RecordModel.find({
			createdAt: {
				$gte: new Date(new Date(startDate).setHours(0, 0, 0)),
				$lt: new Date(new Date(endDate).setHours(23, 59, 59))
			}
		}).sort({ createdAt: 'asc' });
		

		records = records.map(({ key, createdAt, counts }) => ({
			key,
			createdAt,
			totalCount: counts.map(count => count).reduce((carry, item) => carry + item, 0)
		})).filter(record => record.totalCount >= minCount && record.totalCount <= maxCount);


		return records;
	}


	static validateParams(filterParams) {
		const { startDate, endDate, minCount, maxCount } = filterParams;
		
		if (!startDate || !endDate || !minCount || !maxCount) {
			throw new Error("Invalid search params");
		}
	}
}

module.exports = RecordDao;