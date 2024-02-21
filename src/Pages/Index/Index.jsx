import React from "react";
import Chart from "../../common/Chart/Chart";
import SuggestPack from "./SuggestPack";


const data = [
  {
    name: '7/1',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '7/10',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '7/15',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '7/20',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '7/25',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '7/30',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '7/35',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function Index() {
 
  return (
    <>
       <Chart title=" میزان مصرف کل" key={data.name} data={data} XdataKey="name" />
       <SuggestPack />
    </>
  );
}

export default Index;
// sudo /opt/lampp/./manager-linux-x64.run