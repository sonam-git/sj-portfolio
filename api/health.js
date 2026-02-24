export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  res.status(200).json({
    status: 'ok',
    message: 'Email server is running',
    timestamp: new Date().toISOString()
  });
}
