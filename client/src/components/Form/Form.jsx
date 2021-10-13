import { useForm } from "react-hook-form";
import axios from "axios";
import { ENDPOINT_ENTERPRISE } from "../../utils/constants";
import Swal from "sweetalert2";
import { useEffect } from "react";

export default function Form ({ flag, preloadData, setFlag, setData }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: 'all', delayError: 1000});
    
    useEffect(()=>{
        reset(preloadData)
    },[flag])

    const onSubmit = data => {
        if(flag){
            axios.put(ENDPOINT_ENTERPRISE, {...data, id:preloadData._id})
            .then(()=>{
                setData({})
                setFlag(false)
                reset({})
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'bottom-end',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                
                Toast.fire({
                    icon: 'success',
                    title: `Información editada correctamente`
                })
            })
            .catch(()=>{
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'bottom-end',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                
                Toast.fire({
                    icon: 'error',
                    title: 'Error. Contactese con un administrador del sitio'
                })
            })
        }else{
            axios.post(ENDPOINT_ENTERPRISE, data)
            .then(()=>{
                reset()
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'bottom-end',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'success',
                    title: `Empresa registrada correctamente`
                  })
            })
            .catch(()=>{
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'bottom-end',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'error',
                    title: 'Error. Contactese con un administrador del sitio'
                  })
            })
        }
    };

    let inputClassname = "text-lg"

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center gap-y-4">
        
            <input 
            className={inputClassname}
            placeholder="Nombre..."
            {...register("name", 
            { 
                required: {
                    value: true,
                    message:"Este campo es obligatorio"
                },
                maxLength:{
                    value:50,
                    message:"El nombre de la empresa no puede exceder los 50 caracteres"
                },
                minLength:{
                    value:2,
                    message:"El nombre de la empresa debe tener más de 2 caracteres"
                }
            })} />
            {errors.name && <span>{errors.name.message}</span>}

            <input 
            className={inputClassname}
            placeholder="Dirección..."
            {...register("address", 
            { 
                required: {
                    value: true,
                    message:"Este campo es obligatorio"
                },
                maxLength:{
                    value:100,
                    message:"La dirección de la empresa no puede exceder los 100 caracteres"
                },
                minLength:{
                    value:10,
                    message:"La dirección de la empresa debe tener más de 10 caracteres"
                }
            })} />
            {errors.address && <span>{errors.address.message}</span>}

            <input 
            className={inputClassname}
            placeholder="NIT..."
            {...register("NIT", 
            { 
                required: {
                    value: true,
                    message:"Este campo es obligatorio"
                },
                pattern:{
                    value: /(^[0-9]{9}-{1}[0-9]{1}$)/,
                    message:"El NIT no tiene un formato válido"
                }
            })} />
            {errors.NIT && <span>{errors.NIT.message}</span>}

            <input 
            type="number"
            className={inputClassname}
            placeholder="Teléfono..."
            {...register("phone", 
            { 
                required: {
                    value: true,
                    message:"Este campo es obligatorio"
                },
                validate: phone=> phone.toString().length === 10 || "El numero telefonico debe tener 10 caracteres",
            })} />
            {errors.phone && <span>{errors.phone.message}</span>}

            <input type="submit" value={flag?"Editar":"Registrar"} />

        </form>
    )
}