// prettier-ignore
export const ADD_QUERY = "INSERT INTO contact_list SET ?";
// prettier-ignore
export const UPDATE_QUERY = "UPDATE contact_list SET ? WHERE id = ?";
// prettier-ignore
export const DISPLAY_QUERY = "SELECT * FROM contact_list";
// prettier-ignore
export const DELETE_QUERY = "UPDATE contact_list SET is_deleted = 1 WHERE id = ?";
