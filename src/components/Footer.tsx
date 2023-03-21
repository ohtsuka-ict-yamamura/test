import Image from 'next/image';

const Footer = () => (
  <div className="relative bottom-0 z-40 flex justify-center border-t border-slate-300 py-6">
    <Image
      alt=""
      src="/assets/nord-bg.svg"
      fill
      style={{ objectFit: 'cover' }}
    />
    <div className="z-10 uppercase text-nord-4">@ 2023 Yuki Yamamura</div>
  </div>
  // <div className="flex justify-center border-t border-slate-300 py-6">
  //   <div className="uppercase">@ 2023 Yuki Yamamura</div>
  // </div>
);

export default Footer;
