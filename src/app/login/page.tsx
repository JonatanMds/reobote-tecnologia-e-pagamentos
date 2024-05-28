"use client"
import { useForm } from "react-hook-form";
import Button from "../components/button";
import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const userLoginSchema = z.object({
  email: z.string()
    .min(1,{message:'O e-mail é obrigatório'})
    .email({message:'Campo incorreto'}),
  password: z.string()
    .min(1,{message:'A senha é obrigatório'})
})

type UserLoginSchema = z.infer<typeof userLoginSchema>

export default function Login(){

  const [teste, setTeste] = useState('')
  const {register, handleSubmit, formState:{errors}} = useForm<UserLoginSchema>({
    resolver: zodResolver(userLoginSchema)
  })

  function handleCreateCont(data: UserLoginSchema){
    setTeste(data.email)
  }

  return(
    <div className="flex min-h-screen flex items-center justify-between bg-white text-black">
      <div className="w-[40vw] h-[100vh] p-2">
        <div className="w-full h-full bg-[#33bff3] rounded-lg">
        </div>
        {/* <Image 
          alt=""
          src={bgImage}
          style={{width:'100%', height:'100%', objectFit:'cover', padding:'8px', borderRadius:'18px'}}        
        /> */}
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-6">
        <h1 className="text-2xl font-semibold">Autenticação</h1>
        
        <form
          onSubmit={handleSubmit(handleCreateCont)} 
          className="flex flex-col gap-4 w-[30%]">
          <div className="flex flex-col gap-1">
            <input 
              className="bg-[#eeeff1] p-2 rounded text-sm"
              type="email" 
              placeholder="E-mail"
              {...register('email')}
              />
              {errors.email && <span className="text-xs text-[#e14343]">{errors.email.message}</span>}
          </div>
          <div className="flex flex-col gap-1">
            <input 
              className="bg-[#eeeff1] p-2 rounded text-sm"
              type="password" 
              placeholder="Senha"
              {...register('password')}
              />
            {errors.password && <span className="text-xs text-[#e14343]">{errors.password.message}</span>}
          </div>
          <Button text="Logar" linkPage="dashboard"/>
          <p className="w-full flex justify-center items-center text-xs text-[#33bff3] cursor-pointer underline">Esqueci minha senha.</p>
        </form>
        <p>{teste}</p>
      </div>
    </div>
  )
}