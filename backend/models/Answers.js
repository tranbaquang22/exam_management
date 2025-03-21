import db from "../config.js";

const Answer = {
  getAllByQuestionId: (q_id, callback) => {
    db.query("SELECT * FROM answers WHERE q_id = ?", [q_id], callback);
  },

  getById: (id, callback) => {
    db.query("SELECT * FROM answers WHERE id = ?", [id], callback);
  },

  create: (answer, callback) => {
    db.query("INSERT INTO answers SET ?", answer, callback);
  },

  update: (id, answer, callback) => {
    db.query("UPDATE answers SET ? WHERE id = ?", [answer, id], callback);
  },

  delete: (id, callback) => {
    db.query("DELETE FROM answers WHERE id = ?", [id], callback);
  },
};

export default Answer;
