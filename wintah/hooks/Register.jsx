import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {z} from "zod"

const registerSchema=z.object ({
    name:z.string().min(3,"Name must have mininum of 3 letters"),
    email:z.string().email("ENTER YOUR EMAIL"),
    password:z.string().min(8,"PASSWORD MUST CONTAIN ATLEAST  8 CHARACTERS")
})




export const Register = () => {
    const [formData,setFormData]=useState({
        Name: "",
        Email:"",
        Password:""
    });
    const handleChange=(e)=>{
        const {name , value}=e.target
        setFormData({
            ... formData,
            [name]:value
        })

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const result =registerSchema.safeParse(formData)
        if(result.success){
            console.log("vaildation success");
            console.log(formData)
        }
        else{
            alert(result.error.issues[0].message);
        }
    }
  return (
    <div>
        
        <form onSubmit={handleSubmit}>   
            <label htmlFor="name">Enter Your Name : </label>
            <input type="text" name="name" onChange=
            {handleChange} value={formData.name}/>
            <br />
            <label htmlFor="email">Enter Your Email : </label>
            <input type="email" name="email" onChange=
            {handleChange} value={formData.email}/>
            <br />
            <label htmlFor="password">Enter Your password : </label>
            <input type="text" name="password" onChange=
            {handleChange} value={formData.password}/>
            <br />
            <Button onClick={handleSubmit}>Register</Button>

        </form> 
    </div>
  )
}
