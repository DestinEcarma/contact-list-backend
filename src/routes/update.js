import db from "../db/index.js";
import { UPDATE_QUERY } from "../db/queries.js";
import fieldChecker from "../utils/fieldChecker.js";

const UPDATE_FIELDS = [
	["first_name", "string"],
	["last_name", "string"],
	["email_address", "string"],
	["contact_number", "string"],
];

export default (req, res) => {
	if (
		!("id" in req.query) ||
		isNaN(req.query.id) ||
		!fieldChecker(req.body, UPDATE_FIELDS)
	) {
		return res.status(404).send("Error");
	}

	const { first_name, last_name, email_address, contact_number } = req.body;

	db.query(
		UPDATE_QUERY,
		[
			{ first_name, last_name, email_address, contact_number },
			Number(req.query.id),
		],
		(err, query_res) => {
			if (err) {
				return res.status(500).send("Error");
			}

			if (query_res.affectedRows === 0) {
				return res.status(404).send("Error");
			}

			res.send("Contact updated");
		},
	);
};
