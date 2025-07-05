export function Navbar(){
    return(
        <div className="bg-green-500 flex justify-between h-[60px] border-2 bg-red-500"> 
            <div className="bg-green-500 h-[50px]">   
            <img src="/verified.png" alt="" className="h-full w-auto object-contain block border-2 rounded-full my-4"/>
            </div>  
             <h1 className="text-2xl decoration-red-100">To-Do List</h1>
             </div> 
    )
}