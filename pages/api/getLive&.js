import clientPromise from '@/lib/mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('liveDB'); // اسم قاعدة البيانات عندك
    const liveDoc = await db.collection('live').findOne({});

    res.status(200).json({ liveLink: liveDoc?.liveLink || '' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'خطأ في جلب الرابط' });
  }
}
