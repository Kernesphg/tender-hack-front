import { faker } from '@faker-js/faker'
import {
  CategoryScale,
  Chart,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip
} from 'chart.js'
import { FC } from 'react'
import { Line } from 'react-chartjs-2'

export const ChartLine: FC = () => {
  Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: '#fff'
        }
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
        color: '#fff'
      }
    }
  }

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
  ]

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
        borderColor: '#7677E2',
        backgroundColor: '#7677E2',
        lineTension: 0.4
      }
    ]
  }

  return <Line options={options} data={data} />
}
