'use client'

import ReactPlayer from "react-player";

type UrlVideo = {
  url: string
}

export function Player(props: UrlVideo) {
  return <ReactPlayer height={150} width={260} url={props.url} playing={true} loop={true} 
    config={{ youtube: { playerVars: { controls: 0, modestbranding: 1, showinfo: 0, rel: 0 }}}}
/>
}