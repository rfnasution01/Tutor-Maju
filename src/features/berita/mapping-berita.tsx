import { Button } from '@/components/Button'

export function MappingBerita() {
  return (
    <div className="grid h-full grid-rows-12 gap-y-32 ">
      {/* Main News */}
      <div className="row-span-8 flex">
        <div className="flex flex-1 flex-col gap-y-24">
          {/* --- Best of --- */}
          <div className="flex">
            <p className="border-l-8 border-primary-shade-200 bg-primary-shade-200 bg-opacity-10 p-16 font-roboto text-[2rem] uppercase">
              Best of the week
            </p>
          </div>
          {/* --- Tag --- */}
          <div className="flex items-center gap-x-24">
            <p>Blockchain News</p>
            <p className="italic text-slate-500">4 jam yang lalu</p>
          </div>
          {/* --- Title --- */}
          <p className="font-roboto text-[3rem]">
            Top Analyst Unveils Catalyst That Could Trigger Nearly 50% Surge for
            ETH - Here's His Outlook
          </p>
          {/* --- Hastag --- */}
          <div className="flex items-center gap-x-12">
            <p className="text-slate-500">#Ethereum</p>
            <p className="text-slate-500">#Analytics</p>
          </div>
          <div className="flex">
            <Button
              rounded="rounded-xl"
              borderColor="border-primary-shade-200"
              textColor="text-primary-shade-200 hover:bg-primary-shade-200 hover:text-white hover:border-transparent"
              child={<div className="px-48">Read Article</div>}
            />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <img src="/img/cosmic.png" alt="berita" className="w-[40rem]" />
        </div>
      </div>
      <div className="row-span-4 bg-blue-200">Test</div>
    </div>
  )
}
