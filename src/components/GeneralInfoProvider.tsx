import { ChartLine } from './UI/ChartLine';
import { Table } from './UI/Table';
import { ProfileIcon } from './UI/icons/ProfileIcon';

export const GeneralInfoProvider = () => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="flex gap-3 py-4 mx-auto items-center">
        <div className="w-10">
          <ProfileIcon />
        </div>
        <h5 className="flex items-center gap-3 text-2xl ">
          <span className=" text-3xl text-corporateColor font-semibold">ИНН: </span>138172488472389
        </h5>
      </h3>
      <hr />
      <h5 className="text-center text-2xl py-3">Общая доходность поставщика</h5>
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
      <Table count={2} time={new Date()} />
      <hr />
      Соблюдение сроков в процентах
    </div>
  );
};
