export default function Memories() {
  return (
    <div className="h-[100vh] grid grid-cols-7 grid-rows-3 gap-2 justify-center p-2">
      <div className="grid col-span-2 row-span-3 gap-2">
        <div className="rounded-2xl row-span-1 p-2 border">A</div>
        <div className="rounded-2xl row-span-1 p-2 border">B</div>
        <div className="rounded-2xl row-span-1 p-2 border">C</div>
      </div>
      <div className="border rounded-2xl col-span-3 row-span-3 p-2">b</div>
      <div className="border rounded-2xl col-span-2 row-span-3 p-2">c</div>
      
    </div>
  )
}