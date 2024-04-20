import { TextImage } from '@/components/TextImage'
import TimeSinceUploaded from '@/libs/helpers/timeUploaded'
import { BeritaType } from '@/libs/interface'

export function BestNews({ data }: { data: BeritaType }) {
  return (
    <div className="grid grid-cols-12 gap-x-32">
      <div className="col-span-6">
        <TextImage
          height="h-[48rem]"
          image={data?.photo?.gambar}
          tag={data?.kategori}
          time={<TimeSinceUploaded uploadTime={data?.tanggal} />}
          title={data?.judul}
        />
      </div>
      <div className="col-span-6">
        <p className="font-roboto text-[3rem]">
          {data?.judul ??
            `Top Analyst Unveils Catalyst That Could Trigger Nearly 50% Surge
        for ETH - Here's His Outlook`}
        </p>

        {data ? (
          <span
            className={`line-clamp-3 font-light`}
            dangerouslySetInnerHTML={{ __html: data?.isi }}
          />
        ) : (
          Array.from(
            { length: 4 },
            () => `Lorem ipsum dolor sit amet consectetur adipisicing elit. In
pariatur totam repellat animi laboriosam nisi, officiis sint
similique. Dolorum in asperiores dolor et tenetur velit cum
sapiente voluptatum vitae cupiditate?. Lorem ipsum dolor sit amet
consectetur adipisicing elit. Minus id dolores, perspiciatis, ab
quia atque exercitationem repellendus, consequuntur quibusdam
aliquid error temporibus dicta sint non libero labore placeat
nihil? Maiores! Lorem ipsum dolor sit amet consectetur adipisicing
elit. Odio dolorem tempora provident neque laboriosam facilis
porro minima, ad rem, totam quo modi ducimus eos officia quaerat
sed doloribus animi! Fugiat!`,
          ).map((item, index) => (
            <p key={index} className="py-4">
              {item}
            </p>
          ))
        )}
      </div>
    </div>
  )
}
