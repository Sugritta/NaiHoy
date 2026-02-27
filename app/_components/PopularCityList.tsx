"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Kanit } from "next/font/google";


export function PopularCityList() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-10 sm:py-16 md:py-20">
      <h2 className="max-w-7xl pl-3 sm:pl-4 mx-auto text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-kanit">
        พิกัดลับ เที่ยวอันซีน
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContentNorth = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content-north" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-kanit max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                หมู่บ้านรักไทย (Ban Rak Thai) หรือที่รู้จักกันในอีกชื่อว่า "บ้านแม่ออ"
              </span>{" "}
              เดิมทีที่นี่เป็นหมู่บ้านของชาวจีนยูนนานที่อพยพมาตั้งถิ่นฐาน โดยครอบครัวแรกๆ เป็นอดีตทหารจีนคณะชาติ (ก๊กมินตั๋ง กองพล 93) 
              ที่เดินทางเข้ามาในไทย ปัจจุบันชาวบ้านยังคงสืบทอดวิถีชีวิต วัฒนธรรม ภาษาพูด และสถาปัตยกรรมแบบจีนตอนใต้เอาไว้อย่างเหนียวแน่น
            </p>
            <img
              src="https://dmc.tatdataapi.io/assets/d3f48b20-bac0-4b2d-8613-e30fdcc0d96e.jpg"
              alt="Ban Rak Thai, Mae Hong Son, Thailand"
              height="600"
              width="600"
              className="mt-6 w-3/4 h-3/4 mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};
const DummyContentEast = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content-north" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-kanit max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                สะพานข้ามแม่น้ำแควตั้งอยู่ที่ตำบลท่ามะขาม อำเภอเมือง จังหวัดกาญจนบุรี
              </span>{" "}
              ถูกสร้างขึ้นในช่วงสงครามโลกครั้งที่ 2 (ประมาณปี พ.ศ. 2486) โดยกองทัพญี่ปุ่นที่ต้องการสร้างเส้นทางรถไฟไปสู่ประเทศเมียนมา 
              เพื่อใช้เป็นเส้นทางลำเลียงอาวุธและกำลังพล การก่อสร้างทางรถไฟสายนี้เต็มไปด้วยความยากลำบากและใช้แรงงานเชลยศึกฝ่ายสัมพันธมิตร
              ทำให้มีผู้เสียชีวิตจากการทำงานหนัก โรคระบาด และขาดสารอาหารเป็นจำนวนมาก จนเส้นทางนี้ได้รับการขนานนามว่า "ทางรถไฟสายมรณะ"
            </p>
            <img
              src="https://dmc.tatdataapi.io/assets/c43f6d8a-0a62-4b41-b75f-2a95635ae044.jpeg"
              alt="Quaen River Bridge, Kanchanaburi, Thailand"
              height="600"
              width="600"
              className="mt-6 w-3/4 h-3/4 mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};
const DummyContentWest = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content-north" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-kanit max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                เกาะสีชังมีเคยเป็นสถานที่ประทับของพระเจ้าแผ่นดินถึง 3 พระองค์
              </span>{" "}
              Kละยังเป็นที่จอดพักเรือสินค้านานาชาติ สามารถท่องเที่ยวในวันเดียวหรือพักค้างคืนได้ 
              ชุมชนเกาะสีชังอยู่ทางตะวันออกของเกาะและเป็นที่ตั้งของท่าเรือเทววงษ์ (ท่าล่าง)
              บนเกาะเป็นหมู่บ้านชาวประมง มีบริการที่พักแบบโฮมสเตย์ มีกิจกรรมตกปลา หาหอยนางรม และตกปลาหมึก 
              ส่วนเกาะค้างคาว เป็นเกาะขนาดเล็กอยู่ทางด้านทิศใต้ของเกาะสีชัง มีหาดทรายที่ลงเล่นน้ำได้ รวมทั้งเป็นพื้นที่ตกหมึก ตกปลา ดำน้ำดูปะการัง และพายคายัก
            </p>
            <img
              src="https://dmc.tatdataapi.io/assets/bf6adeab-5ee4-4309-b7e6-83e4e91c80e3.jpeg"
              alt="Koh Sichang, Chonburi, Thailand"
              height="600"
              width="600"
              className="mt-6 w-3/4 h-3/4 mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};
const DummyContentCentral = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content-north" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-kanit max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                เป็นวัดที่พระเจ้าปราสาททอง กษัตริย์กรุงศรีอยุธยาองค์ที่ 24 โปรดให้สร้างขึ้นเมื่อ พ.ศ. 2173 ได้ชื่อว่าเป็นวัดที่มีความงดงามมากแห่งหนึ่งในกรุงศรีอยุธยา
              </span>{" "}
              วัดนี้เป็นสถานที่ฝังพระศพของเจ้าฟ้าธรรมาธิเบศร (เจ้าฟ้ากุ้ง) กวีเอกสมัยอยุธยาตอนปลาย และเจ้าฟ้าสังวาล ซึ่งต้องพระราชอาญาโบยจนสิ้นพระชนม์ 
              ในรัชสมัยของพระเจ้าอยู่หัวบรมโกศ ปรางค์ประธานของวัดนี้อยู่บนฐานสี่เหลี่ยมจัตุรัส และที่มุมฐานมีปรางค์ประจําทิศอยู่ทั้งสี่มุม โดยในรัชสมัยของสมเด็จพระเจ้าปราสาททอง 
              โปรดให้สร้างปรางค์ขนาดใหญ่เป็นประธานของวัด เป็นการรื้อฟื้นศิลปะสมัยอยุธยาตอนต้นที่นิยมสร้างปรางค์เป็นประธานของวัด
            </p>
            <img
              src="https://dmc.tatdataapi.io/assets/ce8c9dea-87a3-49b5-924d-9e75e4617421.jpeg"
              alt="wat chaiwatthanaram, ayutthaya, thailand"
              height="600"
              width="600"
              className="mt-6 w-3/4 h-3/4 mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};
const DummyContentNorthWest = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content-north" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-kanit max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                คำว่า “โบก” หมายถึงแอ่งหรือบ่อน้ำลึกที่เกิดจากการกัดเซาะของน้ำในแม่น้ำโขง ซึ่งมีลักษณะเป็นแอ่งน้ำขนาดใหญ่ที่มีความลึกและกว้างแตกต่างกันไปตามแต่ละโบก
              </span>{" "}
              ทางเข้าแก่งสามพันโบกจะพบก้อนหินที่ถูกกัดเซาะจนมีลักษณะคล้ายหัวสุนัข ซึ่งมีเรื่องเล่าว่าแต่ก่อนมีเจ้าเมืองเป็นผู้เรืองอำนาจประทับใจความงามของสามพันโบก 
              จึงได้ส่งเสนามาศึกษาเพิ่มเติม เมื่อมาแล้วพบขุมทรัพย์เป็นทองคำ จึงให้สุนัขเฝ้าทางเข้าจนกว่าเจ้าเมืองจะออกมา เมื่อเจ้าเมืองได้เห็นสมบัติ เกิดความโลภ 
              กลัวเสนาจะได้ส่วนแบ่ง จึงได้ออกไปทางอื่น สุนัขผู้ภักดีก็เฝ้ารออยู่ตรงนั้นจนตาย บางตำนานก็ว่าลูกพญานาคในลำน้ำโขงเป็นผู้ขุดเพื่อให้เกิดลำน้ำอีกสายหนึ่ง 
              และได้ให้สุนัขเฝ้าทางเข้าระหว่างการขุดจนกระทั่งสุนัขได้ตายลง กลายเป็นหินรูปสุนัขในที่สุด
            </p>
            <img
              src="https://dmc.tatdataapi.io/assets/14a323a5-053b-45f3-8718-146bed5efba6.jpeg"
              alt="Sam Phan Bok, Ubon Ratchathani, Thailand"
              height="600"
              width="600"
              className="mt-6 w-3/4 h-3/4 mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};
const DummyContentSouth = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content-north" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-kanit max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                “ป่าฮาลา-บาลา” เป็นป่าดิบชื้นหรือป่าฝนเขตร้อน ตั้งอยู่บริเวณตอนใต้สุดของประเทศไทย
              </span>{" "}
              มีเนื้อที่ประมาณ 626.7 ตารางกิโลเมตร ครอบคลุมพื้นที่ทิวเขาสันกาลาคีรีและมีแนวป่าต่อเนื่องกับป่าเบลุ่ม ทางตอนเหนือของมาเลเชีย 
              มีพื้นที่ผืนป่าดงดิบที่ไม่ต่อเนื่องกัน แต่ได้รับการประกาศเป็นเขตรักษาพันธุ์สัตว์ป่าเข้าด้วยกัน คือ “ป่าฮาลา” อยู่ในเขตอำเภอเบตง จังหวัดยะลา 
              และอำเภอจะแนะ จังหวัดนราธิวาส ส่วน “ป่าบาลา” อยู่ในเขตอำเภอแว้งและอำเภอสุคิริน จังหวัดนราธิวาส
              thought.
            </p>
            <img
              src="https://dmc.tatdataapi.io/assets/f06e0312-7c32-4f4b-8ca5-d60af5e414b6.jpeg"
              alt="Hala-Bala Wildlife Sanctuary, Yala-Narathiwat, Thailand"
              height="600"
              width="600"
              className="mt-6 w-3/4 h-3/4 mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "แม่ฮ่องสอน",
    title: "หมู่บ้านรักไทย",
    src: "https://dmc.tatdataapi.io/assets/e6d3cf62-7b70-47c1-b228-61d2c5b8f682.jpg",
    content: <DummyContentNorth />,
  },
  {
    category: "กาญจนบุรี",
    title: "สะพานข้ามแม่น้ำแคว",
    src: "https://dmc.tatdataapi.io/assets/75950086-2236-4962-95b9-47e8680ab203.jpeg",
    content: <DummyContentEast />,
  },
  {
    category: "พระนครศรีอยุธยา",
    title: "วัดไชยวัฒนาราม",
    src: "https://dmc.tatdataapi.io/assets/d4f937a5-0cf0-4537-845a-46af4ef30b51.jpeg",
    content: <DummyContentCentral />,
  },

  {
    category: "อุบลราชธานี",
    title: "สามพันโบก",
    src: "https://files.thailandtourismdirectory.go.th/assets/upload/2020/06/12/202006125d099273cdb7c1bb6ce0b98b4119dca4155556.jpg",
    content: <DummyContentNorthWest />,
  },
  {
    category: "ชลบุรี",
    title: "เกาะสีชัง",
    src: "https://files.thailandtourismdirectory.go.th/assets/upload/2017/11/22/20171122e4da944178a8f06f8f2c147055089416121253.jpg",
    content: <DummyContentWest />,
  },
  {
    category: "ยะลา-นราธิวาส",
    title: "เขตรักษาพันธุ์สัตว์ป่าฮาลา-บาลา",
    src: "https://www.nairobroo.com/wp-content/uploads/2020/11/%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%95%E0%B8%81%E0%B8%AE%E0%B8%B2%E0%B8%A5%E0%B8%B2%E0%B8%8B%E0%B8%B0%E0%B8%AB%E0%B9%8C1.jpg",
    content: <DummyContentSouth />,
  },
];
