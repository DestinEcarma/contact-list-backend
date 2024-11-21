export default function (obj, fields) {
	for (let [key, datatype] of fields) {
		if (!(key in obj)) return false;
		if (typeof obj[key] !== datatype) return false;
	}

	return true;
}
