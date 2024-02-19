import { AccountCircle, MailOutlineOutlined, WifiOutlined } from "@mui/icons-material";
import React from "react";
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import Logo from '../../assets/Images/Logo/logo.svg'


function LeftSide() {
  const percentage = 30;
  return (
    <section className="grid col-span-2 min-h-screen">
      <div className="flex flex-col gap-5 p-2">
        {/* Profile Info */}
        <div className="bg-white flex-between max-h-20 rounded-3xl p-2">
          <span className="rounded-full text-slate-200 ring-4 ring-primary"><AccountCircle className="size-14"/></span>
          <p className="flex flex-col gap-1">
            <span className="font-DanaBold">محمد قربانی</span>
            <span className="text-sm">09358923824</span>
          </p>
        </div>
        {/* Charge Info */}
        <div className="flex flex-col items-center justify-between h-full bg-primary/10 p-1 rounded-3xl">
          {/* Top */}
          <div>
          <h2 className="flex-center my-3 font-MorabbaBold text-base">
            شارژ باقی مانده سیم کارت
          </h2>
          <div className="w-full mx-auto">
            <CircularProgressbarWithChildren
              value={percentage}
              styles={buildStyles({
                strokeLinecap: "butt",
                textSize: "14px",
                pathTransitionDuration: 0.001,
                pathColor: `rgba(255, 204, 0)`,
                textColor: "#000",
                trailColor: "#d6d6d6",
              })}
            >
        <p className="font-DanaBold text-xl">{percentage} تومان</p>
            </CircularProgressbarWithChildren>
          </div>
          <p className="flex-center bg-primary font-DanaBold text-sm my-8 p-2 rounded-lg shadow-ring">سیم کارتت رو شارژ کن</p>
          {/* Services */}
          <p className="font-DanaBold my-8">خدمات فعال</p>
             
          <Services icon={<MailOutlineOutlined />} title="بسته پیامک هفته ای" date="تا تاریخ ۳۱ خرداد ۱۴۰۰" />
          <Services icon={<WifiOutlined />} title="بسته  اینترنت ماهانه" date="تا تاریخ ۱۲ خرداد ۱۴۰۰" />
          </div>
          {/* Button Banner */}
           <div className="w-full bg-white flex-between max-h-20 rounded-xl mb-4 p-2 font-MorabbaBold">
                 <Link to="https://myket.ir/app/com.myirancell">
                   دانلود اپلیکشین ما
                 </Link>
                 <img src={Logo} alt='Logo' className='size-14'/>
           </div>
        </div>
      </div>
    </section>
  );
}

export default LeftSide;


const Services = ({icon , title , date}) => {
  return(
    <div className="flex-center gap-3 mb-6">
        <p className="size-10 flex-center bg-primary/20 text-primary rounded-lg">{icon}</p>
        <div className="flex flex-col gap-2.5 text-sm">
           <span>{title}</span>
           <span>{date}</span>
        </div>
    </div> 
  )
}

export {Services}