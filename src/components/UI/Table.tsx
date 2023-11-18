import { FC } from 'react';

interface TableProps {
  count: number;
  time: Date;
}

export const Table: FC<TableProps> = ({ count, time }) => {
  if (count !== 0) {
    return (
      <div className="flex flex-col bg-main p-3 rounded-lg">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      #
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Количество блокировок
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Время в блокировке
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                    <td className="whitespace-nowrap px-6 py-4">{count}</td>
                    <td className="whitespace-nowrap px-6 py-4">{time.getHours()} часов</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="mx-auto py-6">
        <span className="text-gray-300 text-center text-2xl">Нет ни одной блокировки</span>
      </div>
    );
  }
};
