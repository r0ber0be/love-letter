'use client'

import letters from './data.json'
import Link from 'next/link';
import { Player } from '@/components/player';
import { useEffect, useState } from 'react';

export default function LoveLetter({ params }: { params: { id: number } }) {
  const [letterAt, setLetterAt] = useState<any>(null)

  useEffect(() => {
    const letter = letters.at(params.id - 1)
    setLetterAt(letter)
  }, [params.id])
  
  if(!letterAt) {
    return (
      <div>
        Desculpe, acho que algo ocorreu errado. Tente recarregar a página ou volte mais tarde.
      </div>
    )
  }

  return (
    <>
      <div className='flex p-4'>
        <Link className='text-xs' href={'/'}>{'<='}</Link>
        <div className='ml-2'>
          {letterAt.title.toUpperCase()}
        </div>
        <div className="relative mt-1 ml-4 -rotate-45 w-[16px] h-[16px] bg-gray-200"> 
          <div className="absolute w-[16px] rounded-full h-[16px] bg-gray-200 ml-[8px]"></div>
          <div className="absolute w-[16px] rounded-full h-[16px] bg-gray-200 -mt-[8px]"></div>
        </div>
      </div>
      {letterAt.videoUrl && (
        <div className='flex justify-center mb-4'>
          <Player url={letterAt.videoUrl} />
        </div>
      )}
      <div className='flex border justify-center bg-orange-300 border-separate rounded-md'>
        <div className='text-justify text-black p-4 w-10/12'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac condimentum nulla. Cras non est sed tellus accumsan porttitor eu a massa. In magna leo, condimentum eu volutpat id, tristique quis magna. Morbi vulputate sagittis justo, quis fringilla quam facilisis sed. Vestibulum aliquam iaculis lorem at pretium. Sed porta aliquet semper. Aliquam porttitor sem sit amet aliquet pulvinar. Donec non sem quis ipsum lacinia ultricies eu at dolor. Sed pulvinar dapibus mollis. Etiam lacinia cursus laoreet. Pellentesque pellentesque elementum nisi quis lobortis. Pellentesque nisi massa, pulvinar eu fringilla id, condimentum eget tellus. Quisque fringilla sapien nunc, id hendrerit metus aliquam et.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit quam, ornare sed magna et, congue posuere nibh. Donec volutpat lobortis suscipit. Donec laoreet suscipit ligula faucibus varius. Mauris velit lectus, pulvinar condimentum ante a, semper viverra sapien. Nunc malesuada auctor nunc sit amet porta. Aliquam vel suscipit massa.
          Nulla mattis lacinia tincidunt. Pellentesque sed sollicitudin velit, non fermentum nisi. Maecenas vehicula fringilla turpis, et fringilla quam convallis eget. Duis at vehicula ante. Sed quis dolor et justo tincidunt dapibus. Donec finibus tempor eros eget dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Curabitur orci libero, iaculis ac ex ut, volutpat tempus augue. Phasellus venenatis rutrum eleifend. Donec accumsan, nibh sit amet eleifend sodales, tortor nulla faucibus sem, nec scelerisque arcu dolor eu urna. Cras sit amet mattis orci. Vestibulum et mauris mollis, pharetra nisl at, congue mauris. Pellentesque vulputate nunc sed mauris posuere maximus. Pellentesque scelerisque metus at metus cursus, id pellentesque lacus placerat. Etiam pulvinar metus quis augue suscipit, lacinia scelerisque augue mattis. Donec odio odio, lacinia quis diam a, blandit bibendum orci. Donec sed massa est.
          Sed convallis interdum accumsan. Proin fermentum id est hendrerit commodo. Suspendisse semper ante vitae lectus suscipit, non sodales massa hendrerit. Fusce at fringilla massa. Cras enim dolor, feugiat et sem ut, viverra fringilla augue. Nullam interdum eget lectus eget varius. Nam vitae arcu nunc. Mauris in aliquam turpis, non vestibulum arcu. Praesent posuere libero vitae ultrices sollicitudin. Vivamus eget lobortis nisi, suscipit mollis ante. Mauris sed augue faucibus purus vehicula dictum id fringilla eros. 
        </div>
      </div>
    </>
  )
}