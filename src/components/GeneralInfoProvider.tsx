import { ChartLine } from './UI/ChartLine';
import { Table } from './UI/Table';
import { ProfileIcon } from './UI/icons/ProfileIcon';

export const GeneralInfoProvider = () => {
  return (
    <div className="flex flex-col">
      <h3 className="flex gap-3 pb-6 pt-3 mx-auto items-center">
        <div className="w-10">
          <ProfileIcon />
        </div>
        <h5 className="flex items-center gap-3 text-2xl ">
          <span className=" text-3xl text-corporateColor font-semibold">ИНН: </span>138172488472389
        </h5>
      </h3>
      <div className="border-t py-6">
        <h5 className="text-center text-2xl py-3">Общая доходность поставщика</h5>
        <ChartLine />
      </div>
      <div className="border-t py-6">
        <h5 className="text-center text-2xl py-3">Активность</h5>
        <ChartLine />
      </div>
      <div className="border-t py-6">карта России</div>
      <div className="border-t py-6">
        <h5 className="text-center text-2xl py-3">Топ категорий</h5>
        <ul>
          <li className="text-2xl text-yellow-200 font-bold">1. 01.23.40</li>
          <li className="text-xl text-gray-400 font-bold">2. 01.23.40</li>
          <li className="text-lg text-yellow-800 font-bold">3. 01.23.40</li>
          <li>4. 01.23.40</li>
          <li>5. 01.23.40</li>
        </ul>
      </div>
      <div className="border-t py-6">
        <Table count={2} time={new Date()} />
      </div>
      <div className="border-t py-6">Соблюдение сроков в процентах</div>
    </div>
  );
};
