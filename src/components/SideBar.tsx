import { FC } from 'react'
import { InputGroup } from './InputGroup'
import { Checkbox } from './UI/Checkbox'
import { ContentTitle } from './UI/ContentTitle'
import { Button } from './UI/buttons/Button'
import { Input } from './UI/inputs/Input'

const regions = [
  { label: 'НН', value: '1' },
  { label: 'МСК', value: '3' }
]

interface SideBarProps {
  isVisible: boolean
  setIsVisibleSideBar: (isVisible: boolean) => void
}

export const SideBar: FC<SideBarProps> = ({
  isVisible,
  setIsVisibleSideBar
}) => {
  console.log(isVisible)

  return (
    <>
      {isVisible && (
        <div
          onClick={() => {
            setIsVisibleSideBar(false)
          }}
          className='absolute z-20 opacity-70 bg-black top-0 left-0 right-0 bottom-0'></div>
      )}
      <form
        className={`${!isVisible && '-left-96'} flex flex-col absolute ${
          isVisible && 'left-0'
        }  transition-all bg-main z-30 top-0 gap-3 h-screen w-96 p-4`}>
        <div className='flex-grow'>
          <div className='flex pb-3 justify-between'>
            <ContentTitle>Фильтрация:</ContentTitle>
            <div className='w-20'>
              <Button
                type='button'
                onClick={() => setIsVisibleSideBar(false)}
                label={'X'}></Button>
            </div>
          </div>
          <InputGroup label='Диапозон даты:'>
            <Input type='date' placeholder='От' name={'startDate'} />
            <Input type='date' placeholder='До' name={'endDate'} />
          </InputGroup>
          <InputGroup label='Диапозон цены:'>
            <Input type='number' placeholder='От' name={'startPrice'} />
            <Input type='number' placeholder='До' name={'endPrice'} />
          </InputGroup>
          <InputGroup label='Регионы:'>
            <div>
              {regions.map(region => (
                <Checkbox
                  name={'name' + region.value}
                  key={region.value}
                  value={region.value}
                  label={region.label}
                />
              ))}
            </div>
          </InputGroup>
          <InputGroup label='КПГЗ:'>
            <div className='w-full'>
              <Input placeholder='xx.xx.xx' name={'categoryCode'} />
            </div>
          </InputGroup>
        </div>
        <div className='mt-4'>
          <Button label='Применить' />
        </div>
      </form>
    </>
  )
}
