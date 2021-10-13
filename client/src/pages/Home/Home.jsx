import { useState } from "react";
import Form from "../../components/Form/Form";
import TableEnterprise from "../../components/TableEnterprise/TableEnterprise";


export default function Home () {

    const [ flag , setFlag ] = useState(false)
    const [ data , setData ] = useState({})

    return (
        <div className="bg-gray-100 w-full h-screen pt-20">
            <div className="w-10/12 mx-auto py-20">
                <Form flag={flag} preloadData={data} setFlag={setFlag} setData={setData}/>
            </div>
            <TableEnterprise setFlag={setFlag} setData={setData}/>
        </div>
    )
}