import {AwardIcon, FaceIcon, GamepadIcon, HomeIcon, RouteIcon} from "@/components";
import {cn} from "@/helpers/cn";
import Link from "next/link";

type NavbarProps = React.ComponentProps<'nav'>
type NavbarListProps = React.ComponentProps<'ul'>
type NavbarListItemsProps = React.ComponentProps<'li'>
type NavbarListItemsLinkProps = React.ComponentProps<typeof Link>
type NavbarListItemsButtonProps = React.ComponentProps<'button'>

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

const NavbarListItemLink = ({href, children, className, ...props}: NavbarListItemsLinkProps) => {
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

const NavbarListItemButton = ({children, className, ...props}: NavbarListItemsButtonProps) => {
  return (
    <NavbarListItem
      className={cn('p-0', className)}
    >
      <button
        className="flex gap-2 items-center rounded-lg p-2 w-full"
        {...props}
      >
        {children}
      </button>
    </NavbarListItem>
  )
}

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

        {/* <NavbarListItemButton
          onClick={() => alert('clicou')}
        >
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