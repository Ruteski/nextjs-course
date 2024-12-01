"use client"

import { cn } from "@/helpers/cn"
import { NavbarListItem } from "./NavbarListItem"
import { NavbarListItemsButtonProps } from "./types"


export const NavbarListItemButton = ({children, className, ...props}: NavbarListItemsButtonProps) => {
   return (
      <NavbarListItem
         className={cn('p-0', className)}
      >
         <button
            className="flex gap-2 items-center rounded-lg p-2 w-full"
            onClick={() => alert('clicou')}
            {...props}
         >
            {children}
         </button>
     </NavbarListItem>
   )
 }