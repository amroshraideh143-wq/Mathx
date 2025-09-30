import React from "react";

function Team() {
  return (
    <section id="team" className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">فريق العمل</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>عمرو الشريدة</li>
        <li>امير المومني</li>
        <li>عباس ملوح</li>
        <li>عبدالله ابو دلو</li>
        <li>كرم ابو دلو</li>
        <li>عمر</li>
      </ul>
      <p className="mt-4">
        📍 مدرسة الشهيد زهاء الدين الحمود الثانوية للبنين
        <br />
        🎓 بإشراف المدير انس الخصاونة والأستاذ حمزة الزبيدي
      </p>
    </section>
  );
}

export default Team;