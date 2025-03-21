import db from "../config.js";

const Exam = {
  getAll: (callback) => {
    db.query("SELECT * FROM exams", callback);
  },

  getById: (id, callback) => {
    db.query("SELECT * FROM exams WHERE id = ?", [id], callback);
  },

  create: (exam, callback) => {
    db.query("INSERT INTO exams SET ?", exam, callback);
  },

  update: (id, exam, callback) => {
    db.query("UPDATE exams SET ? WHERE id = ?", [exam, id], callback);
  },

  delete: (id, callback) => {
    db.query("DELETE FROM exams WHERE id = ?", [id], callback);
  },
};

export default Exam;
