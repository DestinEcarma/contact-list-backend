import { ADD_QUERY } from "../db/queries.js";
import fieldChecker from "../utils/fieldChecker.js";
import db from "./../db/index.js";

const ADD_FIELDS = [
	["first_name", "string"],
	["last_name", "string"],
	["email_address", "string"],
	["contact_number", "string"],
];

export default async (req, res) => {
	if (!fieldChecker(req.body, ADD_FIELDS)) {
		return res.status(400).send("Error");
	}

	const { first_name, last_name, email_address, contact_number } = req.body;

	db.query(
		ADD_QUERY,
		{ first_name, last_name, email_address, contact_number },
		(err) => {
			if (err) {
				return res.status(500).send("Error");
			}

			res.status(201).send("Contact added");
		},
	);
};
