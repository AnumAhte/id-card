import Image from "next/image";

import Card from "./props/card";

function Home() {

  return (
<>
<Card name="Anum" rollno={43541} day="Monday"/><br/>
<Card name="Ahtesham" rollno={53541} day="Tuesday"/><br/>
<Card name="Minal" rollno={3641} day="Wednesday"/>
</>
  )
}
export default Home