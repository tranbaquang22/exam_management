import React from "react";

const ExamDetail = () => {
    return (
        <>
            <div className="exam-container">
                <button className="exit-button">Thoát</button>
                <h2 className="candidate-name">Thí sinh: Nguyễn Văn Long</h2>
                <div className="timer">00:41:43</div>

                <div className="questions">
                    <div className="question">
                        <h3>1. Phương pháp lập trình module là:</h3>
                        <div className="options">
                            <label className="option">
                                <input type="radio" name="q1" value="A" /> A. Phương pháp lập trình với việc cấu trúc hóa dữ liệu...
                            </label>
                            <label className="option">
                                <input type="radio" name="q1" value="B" /> B. Phương pháp lập trình với cách liệt kê các lệnh...
                            </label>
                            <label className="option">
                                <input type="radio" name="q1" value="C" /> C. Phương pháp lập trình được cấu trúc nghiêm ngặt...
                            </label>
                            <label className="option">
                                <input type="radio" name="q1" value="D" /> D. Phương pháp xây dựng chương trình ứng dụng...
                            </label>
                        </div>
                        <div className="selected-answer">Đáp án của bạn: <span className="answer">A</span></div>
                    </div>

                    <div className="question">
                        <h3>2. Đặc điểm cơ bản của lập trình hướng đối tượng thể hiện ở:</h3>
                        <div className="options">
                            <label className="option">
                                <input type="radio" name="q2" value="A" /> A. Tính đóng gói, tính kế thừa, tính đa hình...
                            </label>
                            <label className="option">
                                <input type="radio" name="q2" value="B" /> B. Tính đóng gói, tính kế thừa, tính trừu tượng...
                            </label>
                            <label className="option">
                                <input type="radio" name="q2" value="C" /> C. Tính chia nhỏ, tính kế thừa...
                            </label>
                            <label className="option">
                                <input type="radio" name="q2" value="D" /> D. Tính đóng gói, tính trừu tượng...
                            </label>
                        </div>
                        <div className="selected-answer">Đáp án của bạn: <span className="answer">A</span></div>
                    </div>

                    <div className="question">
                        <h3>3. Từ khoá nào được sử dụng để khai báo một phương thức làm việc với đối tượng của lớp?</h3>
                        <div className="options">
                            <label className="option">
                                <input type="radio" name="q3" value="A" /> A. This
                            </label>
                            <label className="option">
                                <input type="radio" name="q3" value="B" /> B. Super
                            </label>
                            <label className="option">
                                <input type="radio" name="q3" value="C" /> C. Private
                            </label>
                            <label className="option">
                                <input type="radio" name="q3" value="D" /> D. Tất cả đều sai
                            </label>
                        </div>
                        <div className="selected-answer">Đáp án của bạn: <span className="answer">D</span></div>
                    </div>
                </div>

                <div className="pagination">
                    {[...Array(20)].map((_, i) => (
                        <button key={i} className="page-button">{i + 1}</button>
                    ))}
                </div>

                <button className="submit-button">Nộp bài</button>
            </div>
        </>
    );
};

export default ExamDetail;