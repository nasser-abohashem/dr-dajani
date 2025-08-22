import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db(); // استخدم قاعدة البيانات الافتراضية
    const collections = await db.listCollections().toArray();

    res.status(200).json({ success: true, collections });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}
