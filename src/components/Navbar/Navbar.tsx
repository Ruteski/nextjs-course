import {HomeIcon, GamepadIcon, AwardIcon, RouteIcon, FaceIcon} from "@/components";

export const Navbar= ()=> {

  const NavbarList = ({children, className = ""}) => {
    return (
      <ul className={`${className} my-4 border-t border-indigo-400/20 hover:border-indigo-400/40`}>
        {children}
      </ul>

    )
  }

  const NavbarListItem = ({children, className = ""}) => {
    return (
      <li className={`${className} my-2 rounded-lg bg-transparent p-2 hover:bg-indigo-400/40 cursor-pointer flex gap-2 items-center hover:text-slate-100`}>
        {children}
      </li>
    )
  }


  return (
    // 0 /40 é opacidade
    <nav
      className="flex h-screen flex-col bg-slate-900 border-r border-indigo-400/20 hover:border-indigo-400/40 w-72 p-2 text-slate-300">
      <div
        className="flex items-center justify-center"
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