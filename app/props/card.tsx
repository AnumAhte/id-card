import react from "react"

interface Tprops{
    name:string,
    rollno:number,
    day:string
}
const Card=(props:Tprops)=>{

return(

<div className="bg-gray-200 w-80 h-auto ml-4 mt-2 p-4 text-purple-800 italic rounded-lg shadow-md">
    <h1 className="text-xl font-bold">Name: {props.name}</h1>
    <h1 className="text-lg">Roll Number: {props.rollno}</h1>
    <h1 className="text-lg">Day: {props.day}</h1>
</div>
)
}
export default Card