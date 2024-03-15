
import {useState} from "react"
interface PaginationProps{
    next?:Function
    back?:Function
    range?:Object
    data?:Array<Object>
}
const Pagination:React.FC<PaginationProps> = (props:Object) => {
  return (
    <div className="w-full  flex justify-center  items-center  mt-4 relative" >


      <div className="flex justify-between  lg:w-[300px] w-[150px] items-center">

        <p className={`font-inter ${!props.range.start>0?"opacity-[0.5]":"opacity-100"} cursor-pointer`} onClick={()=>{
            if(props.range.start>0)props.back()
        }}>previous</p>

        <div className="flex justify-between flex-col lg:flex-row w-[40%] items-center">  
          <p>Page</p>

          <div className="border-2 border-gray-300 lg:w-[3rem] w-[2.2rem] rounded py-1 px-3 lg:pl-1">
                <p className="text-sm sm:text-lg">{Math.floor(props.range.end/20)}</p>
          </div>

          <p>of {Math.floor(props.data.length/20)}</p>
        </div>

        <p className={`font-inter text-violet-700 ${props.range.end<props.data.length?"opacity-100":"opacity-[0.5]"} cursor-pointer`} onClick={()=>{
            if(props.range.end<props.data.length) props.next()
        }}>Next</p>

      </div>

      {/* <div className="flex lg:w-[110px] w-max flex-col lg:flex-row  lg:justify-between items-center" onClick={() => setHovered(!hovered)}
      >
        <p>show</p>

        <div className="border-2 border-gray-300 w-[4rem] rounded py-1 justify-around flex  items-center">
          <p>{props.data.length>8?16:8}</p>
        </div>
      </div> */}

     {/* {hovered && <div className="w-[4rem] h-[3rem] bg-white rounded border-2 border-gray-400 absolute right-0 lg:top-[-3rem] top-[-1rem]">
          <div className="border-b-2 h-[1.5rem] border-b-gray-300 text-center cursor-pointer " onClick={()=>{
            setHovered(!hovered)
            props.half()
          }}>
              <p>8</p>
          </div>
          <div className="border-b-2 h-[1.5rem] text-center cursor-pointer" onClick={()=>{
            setHovered(!hovered)
            props.full()
          }}>
              <p>16</p>
          </div>
      </div>}  */}
    </div>
  );
};
export default Pagination;