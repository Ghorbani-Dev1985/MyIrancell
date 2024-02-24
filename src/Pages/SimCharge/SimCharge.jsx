import React, { useState } from "react";

const SimChargee = () => {
  const [isPermanent, setIsPermanent] = useState(false);
  const [chargePrice, setChargePrice] = useState(20000);
  const [isAmazingCharge, setIsAmazingCharge] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [arbitraryChargePrice, setArbitraryChargePrice] = useState("");
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="flex-center bg-white shadow-ring rounded-xl my-16">
      <div className="w-full flex justify-between items-start gap-5 p-6">
        <div className="flex flex-col items-center gap-2 flex-1">
          <h2 className="font-DanaBold">خرید آنلاین شارژ ایرانسل</h2>
          <span className="text-base text-gray-500 my-2">نوع سیم‌کارت</span>
          <div className="inline-block mx-auto border border-[#e6e6e8] rounded-3xl">
            <button
              onClick={() => setIsPermanent((prev) => !prev)}
              className={`${
                !isPermanent && "bg-primary"
              } w-28 rounded-3xl font-bold text-sm py-2 transition-colors`}
            >
              اعتباری
            </button>
            <button
              onClick={() => setIsPermanent((prev) => !prev)}
              className={`${
                isPermanent && "bg-primary"
              } w-28 rounded-3xl font-bold text-sm py-2 transition-colors`}
            >
              دائمی
            </button>
          </div>

          <label className="inline-flex items-center cursor-pointer my-5">
            <input
              type="checkbox"
              value={isAmazingCharge}
              onChange={() => setIsAmazingCharge((prev) => !prev)}
              disabled={isPermanent && true}
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 dark:peer-focus:ring-emerald-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-600"></div>
            <span
              className={`${
                isPermanent ? "opacity-50" : "opacity-100"
              } ms-3 text-sm font-medium text-gray-900 dark:text-gray-300`}
            >
              شارژ شگفت انگیز
            </span>
          </label>

          <div className="w-full max-w-sm relative mb-8 z-0">
            <input
              type="text"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              id="PhoneNumber"
              className="block h-14 w-full text-sm text-gray-900 bg-gray-100 rounded-full border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-5 focus:border-primary peer"
              placeholder=" "
            />
            <label
              htmlFor="PhoneNumber"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-5 right-4 z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1 rtl:peer-focus:left-auto"
            >
              شماره تلفن همراه
            </label>
            <p className="text-gray-500 self-start mt-10 mb-8">مبلغ شارژ</p>
            <div className="flex flex-wrap gap-5">
              <ChargePriceBtn
                price={10000}
                chargePrice={chargePrice}
                setChargePrice={setChargePrice}
                isShow={isShow}
                isDisabled={isAmazingCharge ? true : false}
              />
              <ChargePriceBtn
                price={20000}
                chargePrice={chargePrice}
                setChargePrice={setChargePrice}
                isShow={isShow}
                isDisabled={isAmazingCharge ? true : false}
              />
              <ChargePriceBtn
                price={50000}
                chargePrice={chargePrice}
                setChargePrice={setChargePrice}
                isShow={isShow}
              />
              <ChargePriceBtn
                price={100000}
                chargePrice={chargePrice}
                setChargePrice={setChargePrice}
                isShow={isShow}
              />
              <ChargePriceBtn
                price={200000}
                chargePrice={chargePrice}
                setChargePrice={setChargePrice}
                isShow={isShow}
              />
              <button
                onClick={() => {
                  setIsShow((prev) => !prev);
                  setArbitraryChargePrice(Number(chargePrice).toLocaleString());
                }}
                disabled={isAmazingCharge && true}
                className={`${
                  isShow ? "bg-primary" : "bg-slate-200"
                } disabled:cursor-not-allowed disabled:opacity-30 select-none w-28 rounded-3xl py-1 mb-3 transition-colors`}
              >
                <span className="font-DanaBold">سایرمبالغ</span>
              </button>
              {isShow && (
                <>
                  <div className="w-full relative z-0">
                    <input
                      type="text"
                      value={arbitraryChargePrice}
                      onChange={(event) =>
                        setArbitraryChargePrice(event.target.value)
                      }
                      id="arbitraryChargePrice"
                      className="block h-14 w-full font-DanaBold text-base text-gray-900 bg-gray-100 rounded-full border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-5 focus:border-primary peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="arbitraryChargePrice"
                      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-5 right-4 z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1 rtl:peer-focus:left-auto"
                    >
                      {" "}
                      مبلغ شارژ به ریال{" "}
                    </label>
                  </div>
                  <span className="w-full text-gray-600 text-sm mb-4 text-center">
                    حداقل ۱۰,۰۰۰ و حداکثر ۹۰۰,۰۰۰ ریال
                  </span>
                </>
              )}
            </div>
          </div>
          <div className="w-full relative z-0">
            <input
              type="text"
              value={userEmail}
              onChange={(event) => setUserEmail(event.target.value)}
              id="userEmail"
              className="block h-14 w-full font-DanaBold text-base text-gray-900 bg-gray-100 rounded-full border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-5 focus:border-primary peer"
              placeholder=" "
            />
            <label
              htmlFor="userEmail"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-5 right-4 z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1 rtl:peer-focus:left-auto"
            >
              {" "}
              ایمیل (اختیاری){" "}
            </label>
          </div>
          <button
            type="submit"
            className="w-full font-DanaBold py-2 my-8 bg-primary rounded-3xl"
          >
            انتخاب بانک و پرداخت
          </button>
        </div>
        <div className="flex flex-1">
          <div className="w-full bg-gray-100 rounded-xl py-2 px-3">
            <p className="bg-white font-DanaBold rounded-xl py-4 text-center mb-5">
              فاکتور نهایی
            </p>
            <p className="text-gray-400">نوع سیم کارت</p>
            <p className="font-DanaBold my-3">
              {isPermanent ? "دائمی" : "اعتباری"}
            </p>
            <p className="text-gray-400">مستقیم به شماره</p>
            <p className="font-DanaBold my-3">
              {phoneNumber ? phoneNumber : "---"}
            </p>
            <p className="text-gray-400">
              مبلغ شارژ (با احتساب مالیات بر ارزش افزوده)
            </p>
            <p className="font-DanaBold my-3">
              {(chargePrice + (chargePrice * 9) / 100).toLocaleString()} ریال
            </p>
            <p className="text-gray-400">نوع شارژ</p>
            <p className="font-DanaBold my-3">
              {isAmazingCharge ? "شگفت انگیز" : "عادی"}
            </p>
            <p className="text-gray-400"> ایمیل </p>
            <p className="font-DanaBold my-3">
              {userEmail ? userEmail : "---"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimChargee;

const ChargePriceBtn = ({
  price,
  chargePrice,
  setChargePrice,
  isShow,
  index,
  isDisabled,
}) => {
  return (
    <React.Fragment key={index}>
      <button
        disabled={isDisabled ? true : false}
        onClick={() => setChargePrice(price)}
        className={`${
          chargePrice === price && !isShow && !isDisabled
            ? "bg-primary"
            : "bg-slate-200"
        } disabled:cursor-not-allowed disabled:opacity-30 select-none w-28 rounded-3xl px-3 py-1 mb-3 transition-colors`}
      >
        <span className="font-DanaBold">{price.toLocaleString()}</span>
        <span className="mr-1">ریال</span>
      </button>
    </React.Fragment>
  );
};
export { ChargePriceBtn };
