import { ComponentProps } from "react";


interface TableRow extends ComponentProps<`tr`> {}

export function TableRow(props:TableRow) {

  return(
    <tr className="h-14 hover:cursor-pointer" {...props}/>
  )
}