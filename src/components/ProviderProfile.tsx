import { ProfileInfo } from './ProfileInfo';
import { ContentTitle } from './UI/ContentTitle';
import { WrapperBlock } from './UI/WrapperBlock';

export const ProviderProfile = () => {
  return (
    <div className="pt-10 px-6 flex-grow">
      <div className="flex items-center gap-3 mb-10">
        <ContentTitle>Мой профиль</ContentTitle>
      </div>
      <div className="flex flex-col gap-4">
        <WrapperBlock>
          <ProfileInfo />
        </WrapperBlock>
        <div className="flex gap-4">
          <WrapperBlock></WrapperBlock>
          <WrapperBlock>dfgdsfgsdfgsdf</WrapperBlock>
          <WrapperBlock>dfgdsfgsdfgsdf</WrapperBlock>
          <div className="w-full h-full">
            <WrapperBlock>dfgdsfgsdfgsdf</WrapperBlock>
          </div>
        </div>
      </div>
    </div>
  );
};
