import axios from "axios";
import { useEffect, useState } from "react";
import { ENDPOINT_ENTERPRISE } from "../../utils/constants";
import { FiSettings } from "react-icons/fi";
import actionsUponEnterprises from "../../utils/functions/actionsUponEnterprises";
import "./TableEnterprise.scss"


export default function TableEnterprise ({ setFlag, setData }) {

    const [ enterprises, SetEnterprises ] = useState([])

    useEffect(()=>{
        axios.get(ENDPOINT_ENTERPRISE)
        .then((res)=>SetEnterprises(res.data))
        .catch(e=>console.log(e))
    },[])

    return (
        <div className="w-full mx-auto flex items-center justify-center">
            <table className="content-table-enterprise sm:shadow-detail-header w-10/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12 mx-auto">
                <tr className= "enterprise-rows text-lg font-bold ">
                    <th></th>
                    <th>Nombre</th>
                    <th>Dirección</th>
                    <th>NIT</th>
                    <th>Teléfono</th>
                </tr>
                {enterprises?.map(e=>{
                    return (
                        <tr className= "enterprise-rows">
                            <th><FiSettings onClick={()=>actionsUponEnterprises(e, setFlag, setData)} className="cursor-pointer"/></th>
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