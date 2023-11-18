import { ProfileIcon } from './UI/icons/ProfileIcon';

export const ProfileInfo = () => {
  return (
    <div>
      <h3 className="flex gap-3 pb-6 pt-3 mx-auto items-center">
        <div className="w-10">
          <ProfileIcon />
        </div>
        <h5 className="flex items-center gap-3 text-2xl ">
          <span className=" text-3xl text-corporateColor font-semibold">ИНН: </span>138172488472389
        </h5>
      </h3>
      <div className="flex gap-3">
        <p>ГРАФИК</p>
        <p>ГРАФИК</p>
        <p>ГРАФИК</p>
        <p>ГРАФИК</p>
      </div>
    </div>
  );
};
