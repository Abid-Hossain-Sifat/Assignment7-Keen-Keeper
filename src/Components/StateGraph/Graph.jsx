import React, { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const TimeLine = 'timelineEvents'

const Graph = () => {

  const [chartData, setChartData] = useState([0, 0, 0])

  useEffect(() => {
  const interval = setInterval(() => {
    const rawEvents = localStorage.getItem(TimeLine)
    if (!rawEvents) return

    const events = JSON.parse(rawEvents)

    let text = 0, call = 0, video = 0

    events.forEach(event => {
      if (event.type === 'Text') text++
      if (event.type === 'Call') call++
      if (event.type === 'Video') video++
    })

    setChartData([text, call, video])
  }, 1000)

  return () => clearInterval(interval)
}, [])


  const data = {
    labels: ['Text', 'Call', 'Video'],
    datasets: [
      {
        data: chartData,
        backgroundColor: [
          '#7c3aed',
          '#1f2937',
          '#22c55e'
        ],
        borderWidth: 0,
        spacing: 6,
        borderRadius: 10
      }
    ]
  }

  const options = {
    cutout: '65%',
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          boxHeight: 8,
          padding: 20,
          color: '#475569',
          font: {
            size: 12
          }
        }
      }
    }
  }

  return (
    <div className='w-full'>
      <div className='max-w-5xl mx-auto px-4 py-8'>
        <h1 className="text-5xl font-bold text-slate-900 mb-8">
          Friendship Analytics
        </h1>
        <div className="bg-white border border-slate-200 rounded-lg px-6 py-6 min-h-[430px]">
          <h3 className="text-lg font-semibold text-slate-700 mb-8">
          By Interaction Type
          </h3>

          <div className='w-full flex justify-center'>
            <div className='w-[300px] h-[300px]'>
              <Doughnut data={data} options={options} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Graph