import { navItems } from "../constant/navbar";
import Datetime from "./date_time_display";

export default function Navbar() {
    return (
        <div className=" h-13 m-2 font-mono bg-transparent w-full flex justify-between p-1 top-0 left-0  md:text-xl text-sm ">

            {/* left section */}
            <div className="sm:w-50 flex items-center gap-1 p-1">
                {[...Array(4)].map((_, index) => (
                    <div key={index}
                        className={`flex items-center justify-center  rounded-4xl backdrop-blur-3xl shadow-2xl md:h-11 h-8 md:p-4 p-3
                       ${index === 0 ? 'bg-[#dd78b8] md:w-14 w-10 text-black' : 'bg-gray-900 md:w-11 w-8 text-white '}`}>
                        {index + 1}
                    </div>
                ))}
            </div>

            {/* middle section */}
            <div className="bg-blue-600 sm:w-50  p-4 rounded-4xl backdrop-blur-3xl shadow-xl flex items-center justify-center">
                <h3 className="font-mono text-center text-white">Orion Dev</h3>
            </div>

            {/* right section */}
            <div className="sm:w-fit px-3 flex items-center gap-1 p-1 cursor-pointer hove" >
                {navItems.map((item) => (
                    <div key={item.id}
                        className={`flex items-center justify-center group  relative rounded-4xl backdrop-blur-3xl shadow-2xl md:h-11 h-8 md:p-4 p-3 ${item.name==='Clock'? 'bg-red-700': 'bg-gray-900' }  gap-2 w-fit  text-white`}>
                        <item.icon className={`size-5 hover:text-white ${item.name==='Clock' ? 'text-white': 'text-red-400'}`}/>
                        {item.isNotOnlyIcon ? <Datetime /> : null} 
                        <span className="absolute  mt-20 hidden group-hover:block text-white text-sm">{item.tooltip}</span>
                    </div>
                    
                ))}
            </div>
        </div>
    );
}
