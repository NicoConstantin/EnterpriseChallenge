import { useState } from "react";
import Form from "../../components/Form/Form";
import TableEnterprise from "../../components/TableEnterprise/TableEnterprise";


export default function Home () {

    const [ flag , setFlag ] = useState(false)
    const [ data , setData ] = useState({})

    return (
        <div className="bg-yellow-200 w-full h-full">
            <Form flag={flag} preloadData={data} setFlag={setFlag} setData={setData}/>
            <TableEnterprise setFlag={setFlag} setData={setData}/>
        </div>
    )
}