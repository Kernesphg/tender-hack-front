import { ContentTitle } from './UI/ContentTitle';
import { WrapperBlock } from './UI/WrapperBlock';
import { SideBarButton } from './UI/buttons/SideBarButton';
import { Button } from './UI/buttons/Button';
import { SearchInput } from './UI/inputs/SearchInput';
import { useState } from 'react';
import { SideBar } from './SideBar';
import { GeneralInfoProvider } from './GeneralInfoProvider';

export const СomparisonProviders = () => {
  const [isVisibleSideBar, setIsVisibleSideBar] = useState(false);
  const providers: object[] = [{}, {}, {}];
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
          <SearchInput placeholder="ИНН" />
        </div>
        <div className="w-[80px]">
          <Button label="+" />
        </div>
      </div>
      <div
        className={`grid ${providers.length === 0 && 'grid-cols-1'} ${
          providers.length > 0 && 'grid-cols-2'
        } gap-2 mt-6`}>
        {providers.length > 0 ? (
          providers.map(() => (
            <WrapperBlock>
              <GeneralInfoProvider />
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
