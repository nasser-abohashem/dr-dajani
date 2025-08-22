import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'data', 'cv.json');

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(fileContents);
    res.status(200).json(jsonData);
  } catch (error) {
    res.status(500).json({ error: 'فشل تحميل البيانات' });
  }
}
