

interface InputsProps {
  placeholder: string
}

export function Inputs({placeholder}:InputsProps){
  return(
    <input 
    type="text" 
    placeholder={placeholder}
    className="px-3 hover:border-[#808080] focus:border-[#4412A5] outline-none 
        py-4 w-full rounded-lg bg-[#141414] border border-[#292929]"
    />
  )
}