

export default function Brands() {
  const logos = [1, 2, 3, 4]

  return (
    <div className="w-full flex gap-10 overflow-hidden justify-center pt-[10rem] pb-[1rem]">
      {logos.map((logo, o) => 
        <div key={o}>
          <div className="p-6 rounded-xl max-w-[250px] max-h-[150px] bg-slate-200">
            {logo}
          </div>
        </div>
      )}
    </div>
  )
}