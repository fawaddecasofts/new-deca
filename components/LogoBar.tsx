'use client';

import Image from 'next/image';

const partners = [
  { name: 'Logo 1', img: '/2.png' },
  { name: 'Logo 2', img: '/2.png' },
  { name: 'Logo 3', img: '/3.png' },
  { name: 'Logo 4', img: '/4.png' },
  { name: 'Logo 5', img: '/5.png' },
  { name: 'Logo 6', img: '/6.png' },
  { name: 'Logo 7', img: '/7.png' },
  { name: 'Logo 8', img: '/8.png' },
  { name: 'Logo 9', img: '/9.png' },
  { name: 'Logo 10', img: '/10.png' },
  { name: 'Logo 11', img: '/11.png' },
  { name: 'Logo 12', img: '/12.png' },
  { name: 'Logo 13', img: '/13.png' },
  { name: 'Logo 14', img: '/14.png' },
  { name: 'Logo 15', img: '/15.png' },
  { name: 'Logo 16', img: '/16.png' },
  { name: 'Logo 17', img: '/17.png' },
  { name: 'Logo 18', img: '/18.png' },
  { name: 'Logo 19', img: '/19.png' },
  { name: 'Logo 22', img: '/22.png' },
  { name: 'Logo 23', img: '/23.png' },
  { name: 'Logo 25', img: '/25.png' },
  { name: 'Logo 26', img: '/26.png' },
  { name: 'Logo 27', img: '/27.png' },
  { name: 'Logo 28', img: '/28.png' },
  { name: 'Logo 29', img: '/29.png' },
  { name: 'Logo 30', img: '/30.png' },
  { name: 'Logo 31', img: '/31.png' },
  { name: 'Logo 32', img: '/32.png' },
  { name: 'Logo 33', img: '/33.png' },
  { name: 'Logo 34', img: '/34.png' },
  { name: 'Logo 35', img: '/35.png' },
  { name: 'Logo 36', img: '/36.png' },
  { name: 'Logo 37', img: '/37.png' },
  { name: 'Logo 38', img: '/38.png' },
  { name: 'Logo 39', img: '/39.png' },
  { name: 'Logo 40', img: '/40.png' },
  { name: 'Logo 41', img: '/41.png' },
  { name: 'Logo 42', img: '/42.png' },
  { name: 'Logo 43', img: '/43.png' },
];

export default function LogoBar() {
  const list = [...partners, ...partners];

  return (
    <section className="border-y border-black/5 bg-white py-8 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex w-max animate-marquee items-center gap-16">
          {list.map((p, i) => (
            <div
              key={i}
              className="flex shrink-0 flex-col items-center gap-2 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={p.img}
                alt={p.name}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />

              <span className="text-[9px] font-medium uppercase tracking-wide text-ink/40">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
