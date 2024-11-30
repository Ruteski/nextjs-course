export default function GamesLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <p>Games Layout</p>
      <button className="px-4 py-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-600">Save</button>

      {children}
    </div>
  )
}