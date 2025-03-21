import db from "../config.js";

const ExamRoom = {
  getAll: (callback) => {
    db.query("SELECT * FROM exam_rooms", callback);
  },

  getById: (id, callback) => {
    db.query("SELECT * FROM exam_rooms WHERE id = ?", [id], callback);
  },

  create: (examRoom, callback) => {
    db.query("INSERT INTO exam_rooms SET ?", examRoom, callback);
  },

  update: (id, examRoom, callback) => {
    db.query("UPDATE exam_rooms SET ? WHERE id = ?", [examRoom, id], callback);
  },

  delete: (id, callback) => {
    db.query("DELETE FROM exam_rooms WHERE id = ?", [id], callback);
  },
};

export default ExamRoom;
