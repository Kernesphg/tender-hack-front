import { ContentTitle } from './UI/ContentTitle';
import { WrapperBlock } from './UI/WrapperBlock';
import { SideBarButton } from './UI/buttons/SideBarButton';
import { Button } from './UI/buttons/Button';
import { SearchInput } from './UI/inputs/SearchInput';
import { useRef, useState } from 'react';
import { SideBar } from './SideBar';
import { GeneralInfoProvider } from './GeneralInfoProvider';
import axios from 'axios';

export const СomparisonProviders = () => {
  const [isVisibleSideBar, setIsVisibleSideBar] = useState(false);
  const [providers, setProviders] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const addProvider = async () => {
    const url = `http://92.51.38.68:8000/inn_to_payload/${searchValue}/`;
    console.log(url);
    axios
      .get(url)
      .then((res) => {
        if (!providers.includes(searchValue)) {
          setProviders([searchValue, ...providers]);
        } else {
          setError('Такой поставщик уже добавлен для сравнения ');
        }
      })
      .catch((err) => {
        setError('Нет поставщика с таким ИНН');
        setTimeout(() => setError(''), 1500);
      });
  };

  return (
    <div className="pt-10 px-6 flex-grow">
      <SideBar
        isVisible={isVisibleSideBar}
        setIsVisibleSideBar={() => setIsVisibleSideBar(false)}
      />
      <div className="flex items-center gap-3">
        <SideBarButton onClick={() => setIsVisibleSideBar(true)} />
        <ContentTitle>Сравнение поставщиков:</ContentTitle>
      </div>
      <div className="flex gap-2 mt-6">
        <div className="w-[700px]">
          <SearchInput
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="ИНН"
            ref={inputRef}
          />
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <div className="w-[80px]">
          <Button label="+" onClick={() => addProvider()} />
        </div>
      </div>
      <div
        className={`grid ${providers.length === 0 && 'grid-cols-1'} ${
          providers.length > 0 && 'grid-cols-2'
        } gap-2 mt-6`}>
        {providers.length > 0 ? (
          providers.map((el, index) => (
            <WrapperBlock key={index}>
              <GeneralInfoProvider inn={el} />
            </WrapperBlock>
          ))
        ) : (
          <div className="flex flex-col gap-9 m-auto mt-44 text-white w-[900px]">
            <p className="text-9xl font-black text-gray-300 text-center">\(^Д^)/</p>
            <h5 className="text-4xl text-center">
              Введите данные поставщика для сравнения статистики
            </h5>
          </div>
        )}
      </div>
    </div>
  );
};
