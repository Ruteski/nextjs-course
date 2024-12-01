import { cn } from "@/helpers/cn"
import Link from "next/link"
import { NavbarListItemsLinkProps } from "./types"
import { NavbarListItem } from "./NavbarListItem"


export const NavbarListItemLink = ({href, children, className, ...props}: NavbarListItemsLinkProps) => {
   return (
     <NavbarListItem
       className={cn('p-0', className)}
     >
       <Link 
         href={href}
         className="flex gap-2 items-center rounded-lg p-2 w-full"
         {...props}
       >
         {children}
       </Link>
     </NavbarListItem>
   )
 }