import db from '../config.js';
import bcrypt from 'bcryptjs'


export const register = (req, res) => {
    const q = "SELECT * FROM users WHERE email = ? OR username = ?";

    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length) return res.status(409).json("User already exists!");

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        
        const q = "INSERT INTO users (`username`, `email`, `password`, `role`) VALUES (?)";
        const values = [req.body.username, req.body.email, hash, 'user'];

        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json('User has been created.')
        });
    });
}
