export default function DogLoading() {
  return <div className="grid grid-cols-2 gap-4 px-4 py-4 md:grid-cols-3 lg:grid-cols-4" aria-label="Loading dogs">{[1,2,3,4,5,6,7,8].map((item) => <div key={item} className="animate-pulse overflow-hidden rounded-xl bg-white shadow"><div className="h-44 bg-gray-200 sm:h-56" /><div className="p-4"><div className="h-5 w-2/3 rounded bg-gray-200" /></div></div>)}</div>;
}
