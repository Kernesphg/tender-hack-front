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
          <WrapperBlock>
            dsfsdfghsdfgdf sdf sdf sdff sdfsdfsdfsd fsd f sdfsdfsdfsdsdf sdfsdfsdfsdsdfsdf
            sdfsdfsdfsdsdf fdsafsd fdsafsdf fsdfsfhsdfgh sdfgdfhdfhdfnglndsflgdsf g Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Reiciendis delectus expedita ab magnam
            tenetur quia iure est architecto nam possimus quod enim pariatur, consequuntur explicabo
            sint facilis corporis, eos autem. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Totam, magni. Ab natus blanditiis deserunt consequatur, eum officia porro soluta
            laboriosam veniam totam eveniet vitae deleniti maxime. Debitis ratione voluptas
            reiciendis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus,
            accusamus molestiae vel enim commodi corrupti eius incidunt hic! Pariatur doloribus
            facilis ipsa cupiditate consequatur architecto eius? Beatae rem nemo voluptatem?
          </WrapperBlock>
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
