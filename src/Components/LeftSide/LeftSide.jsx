import {
  AccountCircle,
  MailOutlineOutlined,
  WifiOutlined,
} from "@mui/icons-material";
import React, { useEffect } from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { Link } from "react-router-dom";
import Logo from "../../assets/Images/Logo/logo.svg";
import useFetch from "../../Hooks/useFetch";
import axios from "axios";

function LeftSide() {
    const {datas : users} = useFetch('users')
   const {datas : activeServices} = useFetch('services/1')
   console.log(activeServices)
  const percentage = 30;
  return (
    <section className="grid col-span-2 min-h-screen">
      <div className="flex flex-col gap-5 p-2">
        {/* Profile Info */}
        <div className="bg-white flex-between max-h-20 rounded-3xl p-2">
          <span className="rounded-full text-slate-200 ring-4 ring-primary">
            {/* {
              users[0].profile === null ? <AccountCircle className="size-14" /> :
              <img src={users[0].profile} alt={users[0].lastName} className="size-14"/>
            }
             */}
          </span>
          <p className="flex flex-col gap-1">
            {/* <span className="font-DanaBold">{users[0].firstName} {users[0].lastName}</span>
            <span className="text-sm">{users[0].phoneNumber}</span> */}
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
                // value={users[0].charge / 1000}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textSize: "14px",
                  pathTransitionDuration: 0.001,
                  pathColor: `rgba(255, 204, 0)`,
                  textColor: "#000",
                  trailColor: "#d6d6d6",
                })}
              >
                {/* <p className="font-DanaBold text-xl">{users[0].charge / 1000} تومان</p> */}
              </CircularProgressbarWithChildren>
            </div>
            <p className="flex-center bg-primary/10 font-DanaBold text-sm my-8 p-2 rounded-lg border border-primary/30 relative">
              <span className="absolute left-0 -top-1 flex size-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full size-3 bg-primary"></span>
              </span>
              سیم کارتت رو شارژ کن
            </p>
            {/* Services */}
            <p className="font-DanaBold my-8">خدمات فعال</p>
             {
              activeServices.map(({id , icon , title , maxDate}) => {
                return (
                  <Services
                  id={id}
                  icon={icon}
                  title={title}
                  date={maxDate}
                />
                )
              })
             }
          </div>
          {/* Button Banner */}
          <div className="w-full bg-white flex-between max-h-20 rounded-xl mb-4 p-2 font-MorabbaBold">
            <Link to="https://myket.ir/app/com.myirancell">
              دانلود اپلیکشین ما
            </Link>
            <img src={Logo} alt="Logo" className="size-14 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeftSide;

const Services = ({id, icon, title, date }) => {
  return (
    <div key={id} className="flex-center gap-3 mb-6">
      <p className="size-10 flex-center bg-primary/20 text-primary rounded-lg">
          {icon}
      </p>
      <div className="flex flex-col gap-2.5 text-sm">
        <span>{title}</span>
        <span className="text-xs tracking-tightest">{date}</span>
      </div>
    </div>
  );
};

export { Services };
