import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Me from '@/public/me.jpg';

export default function Profile() {
  const social = [
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:matthew.javelet@gmail.com',
    },
    {
      name: 'Phone',
      icon: Phone,
      url: 'tel:501-293-4512',
    },
    {
      name: 'Github',
      icon: Github,
      url: 'https://githib.com/0xMatt',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/matthew-javelet',
    },
  ];
  return (
    <>
      <div className="relative flex w-full justify-center">
        <Image
          src="/cover.webp"
          className="absolute flex h-32 w-full justify-center rounded-xl bg-cover"
          alt="Background cover"
          width={300}
          height={300}
        />
        <div className="absolute -bottom-40 flex h-[84px] w-[84px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400">
          <Image src={Me} alt="Picture of Matthew Javelet" className="rounded-full" />
        </div>
      </div>
      <div className="mt-46 flex flex-col items-center">
        <h4 className="text-navy-700 text-xl font-bold dark:text-white">Matthew Javelet</h4>
        <p className="text-base font-normal text-gray-600">Software Engineer</p>
      </div>
      <div className="mx-auto mt-6 mb-3 flex gap-14 md:!gap-14">
        {social.map((resource, index) => (
          <div className="flex flex-col items-center justify-center" key={index}>
            <Link href={resource.url} target="_blank">
              <resource.icon />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
