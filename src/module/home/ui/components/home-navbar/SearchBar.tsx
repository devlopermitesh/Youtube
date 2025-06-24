import { SearchIcon } from "lucide-react";

const SearchBar=()=>{
    // search funcitonally
return (
    <form className="flex w-full max-w-[600px]  ">
        <div className="flex w-full">
<input type="text" placeholder="Search" className="flex-1 border rounded-l-full focus:outline-none pl-4 py-2 pr-12 focus:border-blue-400" />
{/* add remove search button */}
<button className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 border border-l-0 rounded-r-full text-black disabled:opacity-50 disabled:cursor-not-allowed">
<SearchIcon/>
</button>
        </div>
    </form>
)
}
export default SearchBar;