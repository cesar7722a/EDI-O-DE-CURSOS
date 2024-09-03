import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";


const inputsVariants = tv({
  base:`font-bold px-7 py-4 text-left`,
  variants:  {
    rounded:{
      primary:"rounded-none",
      secondary:"rounded-tl-lg",
      terciary: "rounded-tr-lg"
    }
  },
  defaultVariants: {
    rounded: `primary`,
  }
})

interface TableHeader extends ComponentProps<`th`>, VariantProps<typeof inputsVariants>{}


export function TableHeader({rounded, ...props}:TableHeader){

  return(
    <th className={inputsVariants({rounded})} {...props}/>
  )
}