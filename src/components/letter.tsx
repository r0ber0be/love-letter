'use client'

import { Tilt } from "react-tilt";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";

type Cover = {
  id: number,
  picture: StaticImport | string,
  title: string,
  videoUrl: string
}

export function Letter(props: Cover) {
  //const url = decodeURIComponent(props.picture)
  return (
    <Link href={`/letter/${props.id}`}>
      <Tilt id="tests" className="relative cursor-pointer w-[200px] h-[300px] mb-5 rounded-2xl flex content-center items-center justify-center border-[15px] border-double border-fuchsia-300 hover:border-fuchsia-400 hover:border-dashed">
        <Image src={props.picture} layout="fill" sizes="(max-width: 200px) 100vh" priority={true} quality={100} objectFit="cover" alt="cover of the letter"/>
        Eu quero falar sobre tudo com você. Como se eu estivesse falando comigo.
        <div className="absolute max-w-[200px]">
          <p className="text-2xl p-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
            { props.title }
          </p>
        </div>
      </Tilt>
    </Link>
  )
}