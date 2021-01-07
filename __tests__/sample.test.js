const RecordDao = require("../src/api/record.dao");

describe('Record DAO Test', () => {

	it('should return error on bad input', async () => {
		await expect(RecordDao.filterTasks({})).rejects.toEqual(Error("Invalid search params"));
	});
});
