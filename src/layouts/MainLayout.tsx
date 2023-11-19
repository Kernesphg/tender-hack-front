import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Circle } from '../components/UI/icons/Circle';
import { Sqire } from '../components/UI/icons/Sqire';

export const MainLayout = () => {
  return (
    <div className="overflow-x-hidden text-white bg-main min-h-screen">
      <Header />
      <div className="absolute w-[50vh] left-10 bottom-10">
        <Sqire />
      </div>
      <div className="absolute w-[30vh] right-0 top-52 z-0">
        <Circle />
      </div>
      <main className="flex-grow relative z-30">
        <Outlet />
      </main>
    </div>
  );
};
