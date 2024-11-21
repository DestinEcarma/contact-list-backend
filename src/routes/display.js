import db from "../db/index.js";
import { DISPLAY_QUERY } from "../db/queries.js";

export default (_, res) => {
	db.query(DISPLAY_QUERY, (err, query_res) => {
		if (err) {
			res.status(500).send("Error");
		} else {
			res.json(query_res);
		}
	});
};
