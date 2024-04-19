import { Button } from '@/components/Button'
import { DataPercobaan } from '@/libs/consts/dummy/data-percobaan'
import clsx from 'clsx'
import { List, Play, RefreshCcw, Timer } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'

export function MappingPercobaan({
  setUjian,
  ujian,
}: {
  setUjian: Dispatch<SetStateAction<string>>
  ujian: string
}) {
  return (
    <div className="col-span-6 flex flex-col gap-y-12 rounded-2xl bg-white p-24">
      <p className="text-[2rem] font-semibold">Daptar Ujian Percobaan</p>
      <div className="flex flex-col gap-y-12">
        {DataPercobaan.map((item, idx) => (
          <div
            className={clsx(
              'flex items-center gap-x-24 border p-24 hover:cursor-pointer hover:shadow-md',
              {
                'border-transparent bg-purple-200 hover:shadow-none':
                  item?.title.toLowerCase().includes(ujian),
              },
            )}
            key={idx}
            onClick={() => {
              setUjian(item?.title.toLowerCase())
            }}
          >
            <div className="flex flex-1 flex-col gap-y-8">
              <h5 className="text-[1.8rem] font-bold">{item?.title}</h5>
              <div className="flex items-center gap-x-16">
                <div className="flex items-center gap-x-4">
                  <span>
                    <Timer size={12} />
                  </span>
                  <p className="text-[1.4rem] font-light">{item?.time}</p>
                </div>
                <div className="flex items-center gap-x-4">
                  <span>
                    <List size={12} />
                  </span>
                  <p className="text-[1.4rem] font-light">{item?.soal} Soal</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-16">
              <Button
                variant="solid"
                bgColor="bg-primary"
                textColor="text-white"
                rounded="rounded-xl"
                child={
                  <div className="flex items-center gap-x-12 text-[1.6rem]">
                    Reset
                    <span>
                      <RefreshCcw size={14} />
                    </span>
                  </div>
                }
              />
              <Button
                variant="outlined"
                borderColor="border-primary"
                textColor="text-primary"
                rounded="rounded-xl"
                child={
                  <div className="flex items-center gap-x-12 text-[1.6rem]">
                    Mulai
                    <span>
                      <Play size={14} />
                    </span>
                  </div>
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}