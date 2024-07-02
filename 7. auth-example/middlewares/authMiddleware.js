const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).send({ error: 'Not authenticated' });
    return;
  }

  try {
    const token = authHeader.split(' ')[1]; // istraukiamas token
    const payload = jwt.verify(token, process.env.JWT_SECRET); // patikrinama, jeigu viskas ok, grazina userio info
    console.log(payload);
    req.currentUser = payload;
  } catch (err) {
    res.status(401).send({ error: 'Not authenticated' });
    return;
  }

  next();
};

module.exports = authMiddleware;

// generateToken
// {id: 123} + JWT_SECRET = token

// authMiddleware
// token + JWT_SECRET = {id:123}
