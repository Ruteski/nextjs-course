import {AwardIcon, FaceIcon, GamepadIcon, HomeIcon, RouteIcon} from "@/components";
import {cn} from "@/helpers/cn";
import { NavbarProps } from "./types";
import { NavbarList } from "./NavbarList";
import { NavbarListItemLink } from "./NavbarListItemLink";
import { NavbarListItemButton } from "./NavbarListItemButton";

export const Navbar= ({className, ...props}: NavbarProps)=> {
  return (
    // 0 /40 é opacidade
    <nav
      {...props}
      className={cn("flex h-screen flex-col bg-slate-900 border-r border-indigo-400/20 hover:border-indigo-400/40 w-72 p-2 text-slate-300", className)}>
      <div
        className="flex items-center justify-center my-4"
      >
        <img className="w-auto h-40 p-2" src="http://www.jfmoita.pt/wp-content/uploads/2024/03/Brasao_Moita_Pequeno-1.png" alt=""/>
      </div>

      <NavbarList className="flex-grow">
        <NavbarListItemLink href="/">
          <HomeIcon
            className="w-4 h-4"
          />
          Home
        </NavbarListItemLink>
        <NavbarListItemLink href="/games">
          <GamepadIcon
            className="w-4 h-4"
          />
          Games
        </NavbarListItemLink>
        <NavbarListItemLink href="/top-10">
          <AwardIcon
            className="w-4 h-4"
          />
          Top 10
        </NavbarListItemLink>
        <NavbarListItemLink href="/walkthroughs">
          <RouteIcon
            className="w-4 h-4"
          />
          Walkthroughs
        </NavbarListItemLink>

        {/* <NavbarListItemButton>
          <RouteIcon
            className="w-4 h-4"
          />
          Button Test
        </NavbarListItemButton> */}
      </NavbarList>

      <NavbarList>
        <NavbarListItemLink href="/user">
          <FaceIcon
            className="w-4 h-4"
          />
          User
        </NavbarListItemLink>
      </NavbarList>
    </nav>
  )
}