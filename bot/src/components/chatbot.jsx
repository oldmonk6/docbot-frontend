import { useState } from "react";
import { Textarea } from "./textarea";
import axios from "axios";
export function Chatbot(){
    const [responseans, setResponse] = useState("Hi there! How can I assist you?");

    const [symptoms,setsymptoms]=useState("");
    const [location,setlocation]=useState("");
    const handleSubmit = async () => {
        const response = await axios.post("http://localhost:3001/api/v1/chats/chat", {
          symptoms,
          location,
        },{
          headers:{
            Authorization:"Bearer "+localStorage.getItem("token")
          }
        });
        setResponse(response.data.interaction);
      };
    
     return <div className="w-screen bg-[#75766c]">
        <div className=" h-screen flex flex-col justify-center">
          <div className=" flex justify-center  h-[90%]">
           <div className=" w-[50%] h-[40%]">
            <div className="flex justify-center text-4xl font-semibold ">How can i help you?</div>
            <div className="text-white bg-gray-800 h-[100%] rounded-md border-2 border-solid border-black mt-3">{responseans}</div>
            <div className="mt-4">
              <input type="text " className="bg-gray-800 text-white p-4 w-full rounded-md" placeholder="enter your symptoms " onChange={(e)=>{
                setsymptoms(e.target.value)
              }}></input>
              <input type="text " className="bg-gray-800 text-white p-4 w-full rounded-md mt-3" placeholder="enter your locations " onChange={(e)=>{
                setlocation(e.target.value)
              }}></input>
              <button className="bg-gray-800 text-white p-4 w-full rounded-md mt-3" onClick={handleSubmit}>Submit</button>
            </div>
            </div>
          </div>
          </div>
        </div>
}