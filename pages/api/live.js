import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

export default async function handler(req, res) {
  try {
    await client.connect();
    const db = client.db("wesam-nursery"); // اسم قاعدة البيانات عندك

    // 🔹 هذا هو السجل الوحيد الذي سنعدل رابطه دائماً
    const liveId = "68a2fb4734feaec0dbbc5d6f";

    if (req.method === "GET") {
      const live = await db.collection("live").findOne({ _id: new ObjectId(liveId) });
      if (!live) return res.status(404).json({ success: false, message: "الرابط غير موجود" });
      return res.status(200).json({ success: true, liveLink: live.liveLink });
    }

    if (req.method === "PUT") {
      const { liveLink } = req.body;
      if (!liveLink) return res.status(400).json({ success: false, message: "الرابط فارغ" });

      const result = await db.collection("live").updateOne(
        { _id: new ObjectId(liveId) },
        { $set: { liveLink } }
      );

      if (result.modifiedCount === 1) {
        return res.status(200).json({ success: true, message: "تم تحديث الرابط بنجاح" });
      } else {
        return res.status(404).json({ success: false, message: "لم يتم العثور على الرابط لتحديثه" });
      }
    }

    res.status(405).json({ success: false, message: "Method not allowed" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  } finally {
    // لا تغلق الاتصال لأن MongoClient يحتفظ به على Vercel
  }
}
