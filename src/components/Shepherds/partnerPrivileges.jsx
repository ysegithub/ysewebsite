import Image from "next/image";
import Link from "next/link";

const partners = [
  {
    logo: "/images/shepherds0.png",
    level: "الراعي الماسي",
    // style: "bg-neutral-300 md:w-[50rem] w-60",
    text: "شركة الراعبي للتجارة ومنظومات الطاقة الشمسية هي الرائدة في مجال الطاقة البديلة والمعدات الزراعية وتتميز بتقديم أرقى المواصفات العالمية في مجال الطاقة الشمسية للقطاع الصناعي و الزراعي في اليمن . ",
    comLink: "https://www.alraebi-ye.com/index.html",
    linkName: "رابط الشركة",
    colRoot: "grid md:grid-cols-2 grid-cols-1",
    show: "block",
    hide: "hidden",
    margin: "m-4",
  },
  {
    logo: "/images/shepherds1.png",
    level: "الراعي الذهبي",
    comLink: "https://garallahsolar.com/",
    linkName: "رابط الشركة",
    // style: "bg-amber-300",
    // colRoot: "flex flex-col items-center",
    show: "hidden",
    hide: "block",
    height: "h-60",
    margin: "m-4",
  },
  {
    logo: "/images/shepherds2.png",
    level: "الراعي الذهبي",
    show: "hidden",
    hide: "block",
    comLink: "http://www.alnasrsolar.com/en/",
    linkName: "رابط الشركة",
    // style: "bg-amber-300",
    // colRoot: "flex flex-col items-center",
  },
  {
    logo: "/images/home3.png",
    level: "الراعي الفضي",
    show: "hidden",
    height: "h-60",
    margin: "m-4",
    padding: "p-7",
    // style: "bg-neutral-400 ",
    // colRoot: "flex flex-col items-center",
  },
  {
    logo: "/images/shepherds5.png",
    level: "الراعي الفضي",
    show: "hidden",
    height: "h-60",
    margin: "m-4",
    padding: "p-7",
    // style: "bg-neutral-400",
    // colRoot: "flex flex-col items-center",
  },
  {
    logo: "/images/shepherds6.png",
    level: "الراعي الفضي",
    show: "hidden",
    height: "h-60",
    margin: "m-4",
    padding: "p-7",
    // style: "bg-neutral-400 ",
    // colRoot: "flex flex-col items-center",
  },
  {
    logo: "/images/shepherds7.jpg",
    level: "الراعي الفضي",
    show: "hidden",
    height: "h-60",
    margin: "m-4",
    padding: "p-7",
    // style: "bg-neutral-400",
    // colRoot: "flex flex-col items-center",
  },
];

export default function PartnerCard() {
  return (
    <>
      {partners.map((partner) => {
        return (
          <div
            key={partner.id}
            className={`p-3 ${partner.colRoot} flex flex-row justify-center ${partner.margin} md:h-96`}
          >
            <div className={`flex flex-col justify-center items-center`}>
              <Image
                src={partner.logo}
                width={300}
                height={300}
                alt="logo"
                className={`p-2 rounded ${partner.height} ${partner.padding}`}
              />

              <p className="font-bold text-black p-3 text-xl text-center">
                {partner.level}
              </p>
              <Link
                href={`${partner.comLink}`}
                className={`text-right text-blue-800 font-bold md:p-5 ${partner.hide}`}
              >
                {partner.linkName}
              </Link>
            </div>

            <div
              className={`${partner.show} flex flex-col justify-center items-center`}
            >
              <p className={"text-right p-12"}>{partner.text}</p>
              <Link
                href={`${partner.comLink}`}
                className="text-right text-blue-800 font-bold md:p-5"
              >
                {partner.linkName}
              </Link>
            </div>
          </div>
        );
      })}
      {/* {partners.map((partner) => {
        return (
          <div key={partner.id}>
            <div className={`flex flex-col items-center m-5 w-56 ${partner.bg} rounded-md border-black border-2`} >
              <div className="h-56  flex items-center">
                <Image
                  src={partner.logo}
                  width={500}
                  height={500}
                  alt="logo"
                  className="p-4"
                />
              </div>

              <p className="font-bold text-black p-4 text-xl ">
                {partner.level}
              </p>
            </div>
          </div>
        );
      })} */}
    </>
  );
}
