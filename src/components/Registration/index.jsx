import React, { useState } from "react";

export default function Registration() {
  const [companyName, setCompanyName] = useState("");
  const [personName, setPersonName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [facebook, setFacebook] = useState("");
  const [spaceNumber, setSpaceNumber] = useState("");
  const [price, setPrice] = useState("");
  const [exhibits, setExhibits] = useState("");
  const [peopleNumber, setPeopleNumber] = useState("");
  const [chairsNumber, setChairsNumber] = useState("");
  const [level, setLevel] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // console.log(
  //   "data: ",
  //   companyName,
  //   personName,
  //   phoneNumber,
  //   email,
  //   address,
  //   facebook,
  //   spaceNumber,
  //   price,
  //   exhibits,
  //   peopleNumber,
  //   chairsNumber,
  //   level
  // );

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      companyName,
      personName,
      phoneNumber,
      email,
      address,
      facebook,
      spaceNumber,
      price,
      exhibits,
      peopleNumber,
      chairsNumber,
      level,
    };

    try {
      const res = await fetch("api/contact", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        console.log("Response received");
        console.log(res.status);
        if (res.status === 200) {
          console.log("Response succeeded!");
          setSubmitted(true);
          setCompanyName("");
          setPersonName("");
          setPhoneNumber("");
          setEmail("");
          setAddress('')
          setFacebook('')
          setSpaceNumber('')
          setPrice('')
          setExhibits('')
          setPeopleNumber('')
          setChairsNumber('')
          setLevel()
        }
      });
    } catch (err) {
      console.log("Error: ", err);
    }
  };
  return (
    <div
      className="w-full bg-no-repeat bg-cover bg-fixed flex justify-center"
      style={{ backgroundImage: 'url("/images/background.jpg")' }}
    >
      <div className="md:w-auto md:h-auto m-6 p-4 shadow-lg border-slate-500 border-2 rounded-lg bg-white my-8 backdrop-blur-md backdrop-saturate-200 bg-white/30">
        <h1 className="text-center font-bold m-3 text-orange-500">
          التسجيل في الحدث
        </h1>
        <form
          onSubmit={onSubmit}
          className="grid md:grid-cols-2 grid-cols-1 w-auto gap-3"
        >
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
            placeholder="اسم الشركه"
            className="text-center p-2 rounded-lg md:w-72 border-slate-500"
          />
          <input
            type="text"
            value={personName}
            onChange={(e) => setPersonName(e.target.value)}
            required
            placeholder="الشخص المسؤل"
            className="text-center p-2 rounded-lg"
          />
          <input
            type="number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            placeholder="هاتف التواصل"
            className="text-center rounded-lg"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="البريد الالكتروني"
            className="text-center rounded-lg"
          />
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            placeholder="العنوان"
            className="text-center rounded-lg"
          />
          <input
            type="url"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
            required
            placeholder="صفحة الفيسبوك"
            className="text-center rounded-lg"
          />
          <input
            type="number"
            value={spaceNumber}
            onChange={(e) => setSpaceNumber(e.target.value)}
            required
            placeholder="رقم المساحه المطلوبه"
            className="text-center rounded-lg"
          />
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            placeholder="القيمه"
            className="text-center rounded-lg"
          />
          <input
            type="text"
            value={exhibits}
            onChange={(e) => setExhibits(e.target.value)}
            required
            placeholder="المعروضات"
            className="text-center rounded-lg"
          />
          <input
            type="number"
            value={peopleNumber}
            onChange={(e) => setPeopleNumber(e.target.value)}
            required
            placeholder="عدد الاشخاص داخل المساحه"
            className="text-center rounded-lg"
          />
          <input
            type="number"
            value={chairsNumber}
            onChange={(e) => setChairsNumber(e.target.value)}
            required
            placeholder="عدد الكراسي المطلوبه"
            className="text-center rounded-lg"
          />
          <select
            className="text-center rounded-lg"
            onChange={(e) => setLevel(e.target.value)}
            required
          >
            <option>نطاق المشاركه</option>
            <option value="مشارك">مشارك</option>
            <option value="راعي ماسي">راعي ماسي</option>
            <option value="راعي ذهبي">راعي ذهبي</option>
            <option value="راعي فضي">راعي فضي</option>
          </select>
          <div className="flex flex-col items-center m-3 md:col-span-2">
            <button
              type="submit"
              className="text-center text-white hover:text-white font-semibold border border-white hover:border-black bg-orange-500 rounded-lg transition duration-700 p-2 w-32"
            >
              ارسال
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
