import { ComponentProps } from "react";

interface TableCell extends ComponentProps<`td`> {}

export function TableCell(props:TableCell){

  return(
    <td {...props} className="px-7 py-4"/>
  )
}