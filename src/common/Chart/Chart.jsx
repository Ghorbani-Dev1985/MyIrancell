import { Box, Skeleton } from '@mui/material'
import React from 'react'
import {ResponsiveContainer , XAxis , Tooltip, AreaChart, YAxis, Area} from 'recharts'


function Chart({key, title , data , XdataKey , Ydatakey}) {
  return (
    <Box key={key} className="my-8 shadow-round p-2 rounded-lg">
      <h3 className='my-3 font-MorabbaBold text-2xl'>{title}</h3>
      {
        data.length ? <ResponsiveContainer width="100%" aspect={3}>
        <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey={XdataKey} tick={{ dy: 5 }}/>
            <YAxis dataKey={Ydatakey} tick={{ dx: -45 }} />
            <Tooltip />
            <Area type="monotone" dataKey="pv" stroke="#ffcc00" strokeWidth={4} fill="#ffcc007a" />
          </AreaChart>
      </ResponsiveContainer>   : <Skeleton variant="rounded" className='w-full h-full min-h-96' />
      }
    </Box>
  )
}

export default Chart