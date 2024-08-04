import { ComponentProps, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: `font-bold p-4 rounded-lg`,
  variants: {
    color: {
      primary: 'bg-[#7C3AFF] hover:bg-[#4412A5]',
      secondary: 'bg-[#BA0000] hover:bg-[#8C1010]'
    },
    size: {
      default: `p-4`,
      full: `w-32`,
      semiFull: `w-48`
    },
    margin: {
      default:`mx-auto`,
      semiMargin: `mx-0`
    }
  },
  defaultVariants: {
    color: `primary`,
    size: `default`,
    margin: `default`
  }
})

interface ButtonProps extends ComponentProps<`button`>, VariantProps<typeof buttonVariants> {
  children: ReactNode
}

export function Button({children, color, size, margin, ...props }:ButtonProps){

  return (
  <button {...props}
   className={buttonVariants({ color, size, margin })}>
   {children}
  </button>
  )
}