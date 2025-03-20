CREATE DATABASE exam_management;
USE exam_management;

-- Bảng Users
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('student', 'staff', 'admin') NOT NULL,
    fullname VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NULL,
    dob DATE NULL,
    gender ENUM('male', 'female', 'other') NULL
);

-- Bảng Subjects (Môn học)
CREATE TABLE subjects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    subject_name VARCHAR(255) NOT NULL,
    credit INT NOT NULL,
    status ENUM('active', 'inactive') DEFAULT 'active',
    theory_hour INT NOT NULL,
    practice_hour INT NOT NULL
);

-- Bảng Questions (Ngân hàng câu hỏi)
CREATE TABLE questions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question_text VARCHAR(500) NOT NULL,
    level ENUM('easy', 'medium', 'hard') NOT NULL,
    subject_id INT NOT NULL,
    created_by INT NOT NULL,
    status ENUM('approved', 'pending', 'rejected') DEFAULT 'pending',
    FOREIGN KEY (subject_id) REFERENCES subjects(id) ON DELETE CASCADE,
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE CASCADE
);

-- Bảng Answers (Đáp án)
CREATE TABLE answers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    q_id INT NOT NULL,
    answer_text VARCHAR(500) NOT NULL,
    is_correct TINYINT(1) NOT NULL DEFAULT 0,
    FOREIGN KEY (q_id) REFERENCES questions(id) ON DELETE CASCADE
);

-- Bảng Exams (Đề thi)
CREATE TABLE exams (
    id INT AUTO_INCREMENT PRIMARY KEY,
    exam_code VARCHAR(50) UNIQUE NOT NULL,
    exam_name VARCHAR(255) NOT NULL,
    created_by INT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    start_time DATETIME NOT NULL,
    finish_time DATETIME NOT NULL,
    exam_type ENUM('practice', 'official') NOT NULL,
    total_question INT NOT NULL,
    easy_question INT DEFAULT 0,
    medium_question INT DEFAULT 0,
    hard_question INT DEFAULT 0,
    status ENUM('active', 'inactive') DEFAULT 'active',
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE CASCADE
);

-- Bảng Exam Rooms (Phòng thi)
CREATE TABLE exam_rooms (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    subject_id INT NOT NULL,
    exam_id INT NOT NULL,
    type ENUM('exam', 'practice') NOT NULL,
    FOREIGN KEY (subject_id) REFERENCES subjects(id) ON DELETE CASCADE,
    FOREIGN KEY (exam_id) REFERENCES exams(id) ON DELETE CASCADE
);
