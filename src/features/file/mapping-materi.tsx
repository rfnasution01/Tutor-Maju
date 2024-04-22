import { Button } from '@/components/Button'
import { DataRekaman } from '@/libs/consts/dummy/data-rekaman'

export function MappingMateri() {
  return (
    <>
      {DataRekaman.map((item, idx) => (
        <div
          className={`relative col-span-4 rounded-2xl opacity-95 hover:opacity-100 phones:col-span-12`}
          key={idx}
        >
          <img
            src={item?.imgBg}
            alt="login"
            className="w-full rounded-lg object-cover"
          />
          <div className="absolute left-[2rem] top-[2rem] h-[calc(100%_-_4rem)] w-[calc(100%_-_4rem)] p-8">
            <div className="flex h-full flex-col gap-y-8">
              <div className="flex justify-between">
                <h5 className="text-[1.8rem] font-bold text-slate-200">
                  {item?.title}
                </h5>
              </div>
              <div className="flex flex-1 items-center justify-center">
                <div className="rounded-2xl bg-rose-500 p-24 text-white opacity-90 hover:cursor-pointer">
                  <p className="text-[3rem] uppercase">PDF</p>
                </div>
              </div>
              <Button
                child="Download"
                variant="solid"
                bgColor="bg-primary opacity-20"
                textColor="text-white"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
