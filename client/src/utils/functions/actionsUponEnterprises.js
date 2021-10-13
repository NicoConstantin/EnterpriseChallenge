import axios from "axios";
import { ENDPOINT_ENTERPRISE } from "../constants";
import Swal from "sweetalert2";


export default async function actionsUponEnterprises ( e, setFlag, setData ) {

    const inputOptions = new Promise((resolve) => {
        setTimeout(() => {
            resolve({
            'edit': 'Editar',
            'delete': 'Eliminar',
            })
        }, 1000)
        })
        
        const { value: action } = await Swal.fire({
        title: `Que acción desea realizar en la empresa ${e.name}`,
        input: 'radio',
        inputOptions: inputOptions,
        inputValidator: (value) => {
            if (!value) {
            return 'Necesitas elegir una acción!'
            }
        }
        })
        
        if (action === "edit") {
            setData(e)
            setFlag(true)
        }
        if (action === "delete") {
            axios.delete(ENDPOINT_ENTERPRISE,{ data:{ id : e._id} })
            .then(()=>{
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'bottom-end',
                    showConfirmButton: false,
                    timer: 1200,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'success',
                    title: 'Empresa eliminada'
                  })
            })
            .catch(e=>{
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'bottom-end',
                    showConfirmButton: false,
                    timer: 1200,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'error',
                    title: 'No se pudo eliminar esta empresa'
                  })
            })
        }
}