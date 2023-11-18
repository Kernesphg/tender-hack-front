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

  return (
    <div className="pt-10 px-6 flex-grow">
      {isVisibleSideBar && (
        <SideBar
          isVisible={isVisibleSideBar}
          setIsVisibleSideBar={() => setIsVisibleSideBar(false)}
        />
      )}
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
      <div className="grid grid-cols-2 gap-2 mt-6">
        <WrapperBlock>
          <GeneralInfoProvider />
        </WrapperBlock>
      </div>
    </div>
  );
};
