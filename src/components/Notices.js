import React,{useState} from "react";
import NoticeApi from "../Api/NoticeApi";
import CreateNotice from "./CreateNotice";
const Notices = () => {
    const [show,setShow] = useState(false);



  return (
    <div className="border border-black w-[85%] block my-2 mx-auto lg:w-[62%] py-2 ">
      <div className="my-2">
        <h1 className="text-center font-bold mb-3 text-xl ">
          Teacher Dashboard
        </h1>

         <div className=" border-2 border-black w-[80%] block mx-auto py-2">
                {
                    NoticeApi.map(val=>{
                        return(
                            <h2 key={val.id} className="my-4 mx-3 font-semibold">{val.name}</h2>
                        )
                    })
                }
         </div>

          <div>
              <button onClick={() => setShow(true)}  className="my-5 block mx-auto py-2.5 px-4 w-[80%] text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Create Notice</button>
          </div>

          {
            show && 
            <CreateNotice setShow = {setShow}/>
            

          }
    
       
          
      </div>
    </div>
  );
};

export default Notices;
