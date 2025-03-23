import db from '../config.js';

const Subject = {
    create: (subjectData, callback) => {
        db.query(`INSERT INTO subjects (subject_name, credit, status, theory_hour, practice_hour) VALUES (?, ?, ?, ?, ?)`,
        [subjectData.subject_name, subjectData.credit, subjectData.status, subjectData.theory_hour, subjectData.practice_hour], callback);
    },

    findAll: (callback) => {
        db.query(`SELECT * FROM subjects`, callback);
    },

    findById: (subjectId, callback) => {
        db.query(`SELECT * FROM subjects WHERE id = ?`, [subjectId], callback);
    },

    update: (subjectId, subjectData, callback) => {
        db.query(`UPDATE subjects SET subject_name = ?, credit = ?, status = ?, theory_hour = ?, practice_hour = ? WHERE id = ?`,
        [subjectData.subject_name, subjectData.credit, subjectData.status, subjectData.theory_hour, subjectData.practice_hour, subjectId], callback);
    },

    delete: (subjectId, callback) => {
        db.query(`DELETE FROM subjects WHERE id = ?`, [subjectId], callback);
    },
};

export default Subject;