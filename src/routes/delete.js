import db from "../db/index.js";
import { DELETE_QUERY } from "../db/queries.js";

export default (req, res) => {
	if (!("id" in req.query) || isNaN(req.query.id)) {
		return res.status(400).json({ error: "Invalid id" });
	}

	db.query(DELETE_QUERY, [req.query.id], (err, query_res) => {
		if (err) {
			return res.status(500).send("Error");
		}

		if (query_res.affectedRows === 0) {
			return res.status(404).send("Not found");
		}

		res.send("Contact deleted");
	});
};
