import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';

export const MainLayout = () => {
  return (
    <div className="flex flex-col text-white bg-main min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};
