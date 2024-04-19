export function BestPengumuman() {
  return (
    <div
      className={`relative col-span-4 rounded-2xl hover:cursor-pointer hover:shadow-2xl`}
    >
      <img
        src="/img/app-bg.jpg"
        alt="bg"
        className="h-[30rem] w-full rounded-lg object-cover"
      />
      <div className="absolute left-[2rem] top-[2rem] h-[calc(100%_-_4rem)] w-[calc(100%_-_4rem)] p-8">
        <div className="flex h-full flex-col justify-end gap-y-8 text-slate-200">
          {/* --- Tag --- */}
          <div className="flex items-center gap-x-24">
            <p>Blockchain News</p>
            <p className="italic text-slate-50">4 jam yang lalu</p>
          </div>
          {/* --- Title --- */}
          <p className="font-roboto text-[3rem]">
            Top Analyst Unveils Catalyst That Could Trigger Nearly 50% Surge for
            ETH - Here's His Outlook
          </p>
        </div>
      </div>
    </div>
  )
}
