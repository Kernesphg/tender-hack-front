import { Rating } from 'react-simple-star-rating';
import { ChartLine } from './UI/ChartLine';
import { Table } from './UI/Table';
import { ProfileIcon } from './UI/icons/ProfileIcon';
import { FC, useEffect, useState } from 'react';
import axios from 'axios';

interface GeneralInfoProviderProps {
  inn: string;
}

export const GeneralInfoProvider: FC<GeneralInfoProviderProps> = ({ inn }) => {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    const url = `http://92.51.38.68:8000/inn_to_payload/${inn}/`;
    console.log(url);
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex gap-3 pb-6 pt-3 mx-auto items-center">
          <div className="w-10">
            <ProfileIcon />
          </div>
          <h5 className="flex items-center gap-3 text-2xl ">
            <span className=" text-3xl text-corporateColor font-semibold">ИНН: </span>
            {inn}
          </h5>
          <div className="">
            <Rating readonly className="flex" initialValue={3} />
            <Rating readonly className="flex" initialValue={3} iconsCount={5} />
          </div>
        </div>
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
            {data?.top_kpgz_for_supplier?.length > 0 && (
              <>
                {data?.top_kpgz_for_supplier[0] && (
                  <li className="text-2xl text-yellow-200 font-bold">
                    1. {data?.top_kpgz_for_supplier[0]}
                  </li>
                )}
                {data?.top_kpgz_for_supplier[1] && (
                  <li className="text-xl text-gray-400 font-bold">
                    2. {data?.top_kpgz_for_supplier[1]}
                  </li>
                )}
                {data?.top_kpgz_for_supplier[2] && (
                  <li className="text-lg text-yellow-800 font-bold">
                    3. {data?.top_kpgz_for_supplier[2]}
                  </li>
                )}
                {data?.top_kpgz_for_supplier[3] && (
                  <li>4. 01.23.40{data?.top_kpgz_for_supplier[3]}</li>
                )}
                {data?.top_kpgz_for_supplier[4] && (
                  <li>4. 01.23.40{data?.top_kpgz_for_supplier[4]}</li>
                )}
              </>
            )}
          </ul>
        </div>
        <div className="border-t py-6">
          <Table count={2} time={new Date()} />
        </div>
        <div className="border-t py-6">Соблюдение сроков в процентах</div>
      </div>
    </>
  );
};
