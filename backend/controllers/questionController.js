import Question from "../models/Questions.js";

// Tạo câu hỏi mới
const createQuestion = async (req, res) => {
    try {
        const { q_text, level, s_id, created_by, status } = req.body;
        const question = await Question.create({ q_text, level, s_id, created_by, status });
        res.status(201).json({ message: "Question created successfully!", question });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Lấy danh sách câu hỏi (có phân trang)
const getAllQuestions = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const offset = (page - 1) * limit;

        const { rows: questions, count: total } = await Question.findAndCountAll({
            limit: parseInt(limit),
            offset: parseInt(offset)
        });

        res.json({
            total,
            page: parseInt(page),
            limit: parseInt(limit),
            totalPages: Math.ceil(total / limit),
            questions
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Lấy câu hỏi theo ID
const getQuestionById = async (req, res) => {
    try {
        const question = await Question.findByPk(req.params.id);
        if (!question) return res.status(404).json({ message: "Question not found" });
        res.json(question);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Cập nhật câu hỏi
const updateQuestion = async (req, res) => {
    try {
        const { q_text, level, s_id, created_by, status } = req.body;
        const question = await Question.findByPk(req.params.id);
        if (!question) return res.status(404).json({ message: "Question not found" });

        await question.update({ q_text, level, s_id, created_by, status });
        res.json({ message: "Question updated successfully!", question });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Xóa câu hỏi
const deleteQuestion = async (req, res) => {
    try {
        const question = await Question.findByPk(req.params.id);
        if (!question) return res.status(404).json({ message: "Question not found" });

        await question.destroy();
        res.json({ message: "Question deleted successfully!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export { createQuestion, getAllQuestions, getQuestionById, updateQuestion, deleteQuestion };
