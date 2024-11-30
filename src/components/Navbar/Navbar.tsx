import {AwardIcon, FaceIcon, GamepadIcon, HomeIcon, RouteIcon} from "@/components";
import {cn} from "@/helpers/cn";

type NavbarProps = React.ComponentProps<'nav'>
type NavbarListProps = React.ComponentProps<'ul'>
type NavbarListItemsProps = React.ComponentProps<'li'>

export const Navbar= ({className, ...props}: NavbarProps)=> {

  const NavbarList = ({children, className, ...props}: NavbarListProps) => {
    return (
      <ul className={cn('my-4 border-t border-indigo-400/20 hover:border-indigo-400/40', className)} {...props}>
        {children}
      </ul>

    )
  }

  const NavbarListItem = ({children, className, ...props}: NavbarListItemsProps) => {
    return (
      <li className={cn('my-2 rounded-lg bg-transparent p-2 hover:bg-indigo-400/40 cursor-pointer flex gap-2 items-center hover:text-slate-100', className)} {...props}>
        {children}
      </li>
    )
  }

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
        <NavbarListItem>
          <HomeIcon
            className="w-4 h-4"
          />
          Home
        </NavbarListItem>
        <NavbarListItem>
          <GamepadIcon
            className="w-4 h-4"
          />
          Games
        </NavbarListItem>
        <NavbarListItem>
          <AwardIcon
            className="w-4 h-4"
          />
          Top 10
        </NavbarListItem>
        <NavbarListItem>
          <RouteIcon
            className="w-4 h-4"
          />
          Walkthroughs
        </NavbarListItem>
      </NavbarList>

      <NavbarList>
        <NavbarListItem>
          <FaceIcon
            className="w-4 h-4"
          />
          User
        </NavbarListItem>
      </NavbarList>
    </nav>
  )
}