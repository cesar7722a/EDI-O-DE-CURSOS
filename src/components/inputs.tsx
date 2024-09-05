interface InputsProps {
  placeholder: string;
  setName: (name: string) => void;
  value: string;
}

export function Inputs({ placeholder, setName, value }: InputsProps) {
  return (
    <input
      value={value}
      type="text"
      onChange={(e) => setName(e.target.value)}
      placeholder={placeholder}
      className="px-3 hover:border-[#808080] focus:border-[#4412A5] outline-none 
        py-4 w-full rounded-lg bg-[#141414] border border-[#292929]"
    />
  );
}
