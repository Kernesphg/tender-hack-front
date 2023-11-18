import { ChartLine } from './UI/ChartLine'

export const GeneralInfoProvider = () => {
  return (
    <div className='flex flex-col gap-3'>
      <h3>ИНН: 138172488472389</h3>
      <hr />
      график общая доходность
      <ChartLine />
      <hr />
      График активности
      <hr />
      карта России???
      <hr />
      <h4>Топ категорий</h4>
      <ul>
        <li>01.23.40</li>
        <li>01.23.40</li>
        <li>01.23.40</li>
      </ul>
      <hr />
      Количество блокировок
      <hr />
      Соблюдение сроков в процентах
    </div>
  )
}
