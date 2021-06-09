const db = require("mongoose");

const dbConnection = async () => {
	try {
		await db.connect(process.env.DB_CNT, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true,
		});

		console.log("conectado a la base de datos c:");
	} catch (e) {
		console.error(e);
	}
};

module.exports = { dbConnection };
