import Image from "next/image";
import React from "react";

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-6">
      {/* first section */}
      <div
        className="w-full h-[50%] bg-no-repeat bg-cover bg-fixed backdrop-blur-xl"
        style={{ backgroundImage: 'url("/images/background.jpg")' }}
      >
        <div className="w-full flex flex-row justify-center">
          <div className="flex flex-col justify-center max-w-md m-5 shadow-md shadow-slate-500/20 border p-10">
            <p className="text-black font-bold text-center ">
              يــعد المؤتمر والمعرض  الــثــالث للطــاقة المتجددة 2023 أكــبر
              معرض ومــؤتمر وطــني يجمع كــافة الاطراف ذات العلاقه بالطاقة بكافة
              مستوياتها وقطاعتها ومشاريعها.يهدف للخروج بمخرجات قوية لدعم و
              تحفيزمشاريع الطاقة المتجددة كمشروعات مستقبليه واعده بكل مواصفاتها
              الاقتصادية
            </p>
          </div>
        </div>
      </div>

      {/* second section */}
      <div className="w-full flex md:flex-row flex-col justify-evenly">
        <div className="grid grid-rows-3 place-items-center gap-3 p-3 m-6 md:w-[30%] md:h-[30%] bg-white border border-gray-200 rounded-lg shadow transition duration-300 ease-in-out hover:shadow-lg">
          <Image
            src="/images/home2.png"
            alt="logo"
            width={400}
            height={400}
            className="w-[50%]"
          />
          <Image
            src="/images/home4.png"
            alt="logo"
            width={400}
            height={400}
            className="w-[40%]"
          />
          <Image
            src="/images/home3.png"
            alt="logo"
            width={400}
            height={400}
            className="w-[60%]"
          />
        </div>

        <div className="md:w-[30%] md:h-[80%] flex flex-col mb-3 m-6 bg-white border border-gray-200 rounded-lg shadow transition duration-300 ease-in-out hover:shadow-lg">
          <Image
            src="/images/home1.png"
            alt="logo"
            width={400}
            height={400}
            className="w-full"
          />
        </div>

        <div className="md:w-[30%] md:h-[30%] flex flex-col justify-around m-6 bg-white border border-gray-200 rounded-lg shadow transition duration-300 ease-in-out hover:shadow-lg">
          <p className="text-center text-slate-500 font-semibold p-1">
            تمنح دول العالم اهتماما محوريا لقضية الـطاقة الــمـتـجــددة2023
            الــمــرتـــكــز الاســتــراتـــيــجــي للتنميـةالاقـتصادية ، كـما
            تـضع الدول المتقدمة الـنـظـم واللـوائـح لتـحفيز إنتـاج الطاقة
            بأنواعها و تعمل على تطوير وسائل وسبل استدامة الطاقة ، كـونـهـا
            الـقـوة الـرافـعـة للـصنـاعـة والانتاج فـي المستقبل ، قطعت معظـم دول
            َ كـبيـرا وتـمكنــت مـن بـنـاء تـجارب نـاجـحـة سـاهمـت فـي
            الـتـنـمـيـة الـشامـلـة لـتلك البلدان. العالـم الـنامي شـوطـا
            الـيـمـن كـان أول الـمـستـخـدميـن
          </p>
          <p className="text-center text-orange-500 p-2">
            <span>
              بالتعاون مع
              <br />
              وزارة الكهرباء والطاقة و وزارةالماليه وصندوق دعم وتنمية محافضة
              الحديدة
            </span>
            <br />
            <span> كلية الزراعة - جامعة صنعاء</span>
            <br />
            <span> 8 - 5 محرم 1445هــ الموافق</span>
            <br />
            <span> 26-23 يوليو 2023م</span>
          </p>
        </div>
      </div>

      {/* third section */}
      <div
        className="w-full h-[50%] bg-no-repeat bg-cover bg-fixed"
        style={{ backgroundImage: 'url("/images/background.jpg")' }}
      >
        <div className="m-5">
          <h1 className="text-orange-500 text-2xl font-bold text-center">
            المشاركون
          </h1>
        </div>
        <div className="flex flex-col m-8 rounded-lg backdrop-blur-md backdrop-brightness-125 drop-shadow-lg shadow-slate-500/20 border p-10">
          <div className="grid md:grid-cols-3 grid-cols-2 gap-3 md:gap-6 justify-center md:text-black text-white font-semibold  md:m-4 m-2">
            <h1 className="rounded-2xl border-2 p-2 text-center shadow-lg border-gray-400">
              المؤسسات التعلميه
            </h1>
            <h1 className="rounded-2xl border-2 p-2 text-center shadow-lg border-gray-400">
              الهيئة العامة للاستثمار
            </h1>
            <h1 className="rounded-2xl border-2 p-2 text-center shadow-lg border-gray-400">
              المؤسسات المالية و المصرفية
            </h1>
            <h1 className="rounded-2xl border-2 p-2 text-center shadow-lg border-gray-400">
              جميع الشركات العاملة في مجال الطاقة المتجدده
            </h1>
            <h1 className="rounded-2xl border-2 p-2 text-center shadow-lg border-gray-400">
              المبتكرون و المبدعون الباحثين في أنظمة و حلول الطاقة
            </h1>
            <h1 className="rounded-2xl border-2 p-2 text-center shadow-lg border-gray-400">
              المنظمات الممولة والداعمة لمشاريع الطاقة
            </h1>
          </div>
        </div>
      </div>

      <div className="p-2">
        <h1 className="text-orange-500 text-2xl font-bold text-center">
          الاهداف
        </h1>
        <ul className="text-black text-right m-4 leading-loose font-bold rounded-2xl border-2 p-2 transition duration-300 ease-in-out shadow-lg border-gray-400">
          <li>
            بناء السوق اليمني وتوسيع قنوات وتطبيقات الاستخدام للطاقة الشمسية
          </li>
          <li>
            الاسهام في تحفيز حس الوعي والادراك لدى القطاع الخاص والحكومة
            والمجتمع بمشاريع الطاقه المتجدده كمدخل استراتيجي للتنميه الاقتصاديه
            والاجتماعية
          </li>
          <li>
            الاسهام في بلورة رؤيا استراتيجية مشتركة لتنمية وتطوير مشاريع الطاقة
            المتجددة وتوجيهها نحو التنمية الشاملة في اليمن
          </li>
          <li>
            حشد وتوجيه وتكاتف مختلف الجهود الفاعلة في مجال الطاقة المتجددة ودعم
            وتشجيع المشاريع والاستثمارات في هذا المجال
          </li>
          <li>
            توسيع نشر المعرفة لدى جميع شرائح المجتمع حول أهمية الطاقة المتجددة
          </li>
          <li>التركيز على فوائد الطاقة المتجددة في كل القطاعات</li>
          <li>
            تحفيز التعليم العالي بأهمية إنشاء اقسام وكليات تخصص الطاقة المتجددة
            بكل انواعها
          </li>
          <li>
            تبادل المعرفة وخلق التنافس للحصول على أفضل التقنيات الحديثة
            والمتطوره
          </li>
          <li> رفع مؤشر اليمن في إيجاد وتوفير الطاقة بالنسبة للاستثمار</li>
          <li> تأهيل وإعداد النشء والمجتمع على ثقافة الحفاظ على البيئة</li>
          <li> إيجاد بوابة واسعة لخلق فرص البيع وزيادة نسبتها</li>
        </ul>
      </div>

      <div
        className="w-full h-[50%] bg-no-repeat bg-cover bg-fixed"
        style={{ backgroundImage: 'url("/images/background.jpg")' }}
      >
        <div className="flex flex-col m-8 rounded-lg bg-white drop-shadow-lg shadow-slate-500/20 border p-10">
          <h1 className="text-orange-500 text-2xl font-bold text-center m-2 mb-5">
            مشاريع مستهدفه
          </h1>
          <ul className="grid md:grid-cols-4 grid-cols-2 gap-3 md:gap-6 justify-center text-center text-slate-500 font-bold">
            <li className="rounded-2xl border-2 p-2 shadow-lg border-gray-300">توقيع اتفاقيات استثمارية </li>
            <li className="rounded-2xl border-2 p-2 shadow-lg border-gray-300">الاعلان هن تاسيس شركات مساهمة</li>
            <li className="rounded-2xl border-2 p-2 shadow-lg border-gray-300">افتتاح رسمي لمشاريع جاهزة للافتتاح</li>
            <li className="rounded-2xl border-2 p-2 shadow-lg border-gray-300">الاعلان عن تسهيلات للشركات المشاركة</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
