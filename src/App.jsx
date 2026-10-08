import { useState } from "react";


const App = () => {

       const [title,setTitle] = useState("")
       const [detail,setDetail] = useState("")

       const [task, setTask] = useState([])

     const submitHandler = (e) =>{
       e.preventDefault();
       const copytask=[...task];
       copytask.push({title,detail})
       setTask(copytask)

       setTitle('')
       setDetail('')
     }

     const deletenote=(idx)=>{
      const copytask=[...task];
      copytask.splice(idx,1);
      setTask(copytask);


     } 

     
  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className="flex lg:w-1/2 items-start flex-col gap-4 p-10">


      <h1 className="text-3xl font-bold">Add notes</h1>

           {/* first input for heading */}
        <input
         type="text" 
         placeholder="Enter Notes Heading" 
         className="px-5 w-full font-medium py-2 border-2 outline-none rounded" 
         value={title}
         onChange={(e)=>{
           setTitle(e.target.value); 
         }}
         />

            {/* detail input  */}
        <textarea 
        type="text" 
        placeholder="Write Details"
        className="px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none rounded" 
        value={detail}
        onChange={(e)=>{
          setDetail(e.target.value);
        }}
        />


        <button className=" w-full  active:scale-95 font-medium outline-none bg-white text-black px-5 py-2 rounded">Add Notes

        </button>

      </form>


      <div className="lg:w-1/2 lg:border-l-2 p-10 ">

        <h1 className="text-3xl font-bold ">Recent Notes</h1>

        <div className="flex items-start justify-start flex-wrap gap-5 mt-5 h-[90%] overflow-auto">
        
        {task.map(function(elem,idx){
   return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 rounded-xl text-black px-4 pt-9 pb-4 bg-cover  bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOI0reQLJbYio3nDn-3Do7tojc55WBcflQZPNwCsBcg&s=10')]">
              <div>
               <h3 className="leading-tight text-2xl font-bold">{elem.title}</h3>
                <p className="mt-3 leading-tight font-semibold text-xs  text-gray-900">{elem.detail}</p>
              </div>

              <button onClick={()=>{
                deletenote(idx)
              }} className="w-full cursor-pointer active:scale-95 py-1 text-xs font-bold rounded bg-red-600 text-white p-">Delete</button>
          </div>
        })}

        </div>

      </div>

    </div>
  )
}

export default App
