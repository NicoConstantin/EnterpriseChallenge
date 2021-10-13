import axios from "axios";
import { useEffect, useState } from "react";
import { ENDPOINT_ENTERPRISE } from "../../utils/constants";
import { FiSettings } from "react-icons/fi";
import actionsUponEnterprises from "../../utils/functions/actionsUponEnterprises";


export default function TableEnterprise ({ setFlag, setData }) {

    const [ enterprises, SetEnterprises ] = useState([])

    useEffect(()=>{
        axios.get(ENDPOINT_ENTERPRISE)
        .then((res)=>SetEnterprises(res.data))
        .catch(e=>console.log(e))
    },[])

    return (
        <div>
            <table>
                <tr>
                    <th></th>
                    <th>Nombre</th>
                    <th>Dirección</th>
                    <th>NIT</th>
                    <th>Teléfono</th>
                </tr>
                {enterprises?.map(e=>{
                    return (
                        <tr>
                            <th><FiSettings onClick={()=>actionsUponEnterprises(e, setFlag, setData)}/></th>
                            <th>{e.name}</th>
                            <th>{e.address}</th>
                            <th>{e.NIT}</th>
                            <th>{e.phone}</th>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}