import {HomeIcon, GamepadIcon, AwardIcon, RouteIcon, FaceIcon} from "@/components";

export const Navbar= ()=> {
  return (
                                                                            // 0 /40 é opacidade
    <nav className="flex h-screen flex-col gap-4 bg-slate-900 border-r border-indigo-400/40 hover:border-indigo-400/80 w-72 p-2 text-slate-300">
      <div>
        <img className="max-w-full p-2" src="http://www.jfmoita.pt/wp-content/uploads/2024/03/Brasao_Moita_Pequeno-1.png" alt=""/>
      </div>

      <ul className="flex-grow my-4 border-t border-indigo-400/20 hover:border-indigo-400/40">
        <li className="my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer flex gap-2 items-center hover:text-slate-100">
          <HomeIcon
            className="w-4 h-4"
          />
          Home
        </li>
        <li className="my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer flex gap-2 items-center hover:text-slate-100">
          <GamepadIcon
            className="w-4 h-4"
          />
          Games
        </li>
        <li className="my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer flex gap-2 items-center hover:text-slate-100 ">
          <AwardIcon
            className="w-4 h-4"
          />
          Top 10
        </li>
        <li className="my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer flex gap-2 items-center hover:text-slate-100">
          <RouteIcon
            className="w-4 h-4"
          />
          Walkthroughs
        </li>
      </ul>

      <ul className="my-4 border-t border-indigo-400/20 hover:border-indigo-400/40">
        <li className="my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer flex gap-2 items-center hover:text-slate-100">
          <FaceIcon
            className="w-4 h-4"
          />
          User
        </li>
      </ul>
    </nav>
  )
}