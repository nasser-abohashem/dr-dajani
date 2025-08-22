// pages/api/live.js
import clientPromise from '@/lib/mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db(); // اسم قاعدة البيانات محدد في URI

    // جلب سجل واحد فقط من كولكشن live
    const liveData = await db.collection('live').findOne({});

    if (!liveData) {
      return res.status(404).json({ success: false, message: 'No live data found' });
    }

    res.status(200).json({ success: true, data: liveData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
}
