import React from "react";
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";

function LeftSide() {
  const percentage = 30;
  return (
    <section className="grid col-span-2 p-2">
      <div className="flex flex-col gap-5">
        {/* Profile Info */}
        <div className="bg-white flex-between max-h-20 rounded-3xl p-2">
          <span className="size-14 rounded-full bg-slate-100 border-[6px] border-primary"></span>
          <p className="flex flex-col gap-1">
            <span className="font-DanaBold">محمد قربانی</span>
            <span className="text-sm">09358923824</span>
          </p>
        </div>
        {/* Charge Info */}
        <div className="flex flex-col items-center min-h-screen bg-primary/10 p-1 rounded-3xl">
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
          <p className="bg-primary font-DanaBold text-sm my-8 p-2 rounded-lg shadow-ring">سیم کارتت رو شارژ کن</p>
          <p className="font-DanaBold">خدمات فعال</p>

        </div>
      </div>
    </section>
  );
}

export default LeftSide;
