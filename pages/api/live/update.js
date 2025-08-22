import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { liveLink } = req.body;

  if (!liveLink) {
    return res.status(400).json({ success: false, message: "liveLink is required" });
  }

  try {
    const client = await clientPromise;
    const db = client.db(); // اسم قاعدة البيانات حسب MONGODB_URI
    const liveCollection = db.collection("live");

    // تحديث السجل الوحيد
    const result = await liveCollection.updateOne(
      {}, // شرط فارغ لتحديث أول سجل موجود
      { $set: { liveLink } },
      { upsert: true } // لو ما فيه سجل، ينشئ واحد جديد
    );

    res.status(200).json({ success: true, message: "Live link updated successfully", liveLink });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
}
