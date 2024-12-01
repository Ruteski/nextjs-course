import { cn } from "@/helpers/cn"
import { NavbarListItemsProps } from "./types"

export const NavbarListItem = ({children, className, ...props}: NavbarListItemsProps) => {
  return (
    <li className={cn('my-2 rounded-lg bg-transparent p-2 hover:bg-indigo-400/40 cursor-pointer flex gap-2 items-center hover:text-slate-100', className)} {...props}>
      {children}
    </li>
  )
}
 