import db from '../config.js';

const Question = {
    create: (questionData, callback) => {
        db.query(`INSERT INTO questions (question_text, level, subject_id, created_by, status) VALUES (?, ?, ?, ?, ?)`,
            [questionData.question_text, questionData.level, questionData.subject_id, questionData.created_by, questionData.status], callback);
    },  
    
    findAll: (callback) => {
        const sql = `SELECT q.*, s.subject_name, u.username 
                    FROM questions q
                    JOIN subjects s ON q.subject_id = s.id
                    JOIN users u ON q.created_by = u.id
                    ORDER BY q.id DESC`;
        db.query(sql, callback);
    },

    findById: (questionId, callback) => {
        const sql = `SELECT q.*, s.subject_name, u.username
                    FROM questions q 
                    JOIN subjects s ON q.subject_id = s.id
                    JOIN users u ON q.created_by = u.id
                    WHERE q.id = ?`;
        db.query(sql, [questionId], callback);
    },

    
};  

export default Question;
