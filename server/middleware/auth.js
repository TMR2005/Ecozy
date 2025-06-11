import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  try{
    let token = req.headers['authorization'];
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length).trimLeft();
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  }catch (err) {
    return res.status(403).json({ message: 'Invalid token' });
  }
};
