'use client'
import Image from "next/image";
import Link from "next/link";
import Button from "./components/button";
import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";


const userLoginSchema = z.object({
  email: z.string()
    .min(1,{message:'O e-mail é obrigatório'})
    .email({message:'Campo incorreto'}),
  password: z.string()
    .min(1,{message:'A senha é obrigatório'})
})

type UserLoginSchema = z.infer<typeof userLoginSchema>


export default function Home() {
  
  const [teste, setTeste] = useState('')
  const {register, handleSubmit, formState:{errors}} = useForm<UserLoginSchema>({
    resolver: zodResolver(userLoginSchema)
  })

  function handleCreateCont(data: UserLoginSchema){
    setTeste(data.email)
  }

  return (
    <main className="flex min-h-screen flex items-center justify-between bg-white text-black">
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
        <h1 className="text-2xl font-semibold">Registre-se</h1>
        <form 
          onSubmit={handleSubmit(handleCreateCont)}
          className="flex flex-col gap-4 w-[30%]">
          <div className="flex flex-col gap-1">
            <input 
              className="bg-[#eeeff1] p-2 rounded text-sm"
              type="text" 
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
          <div className="flex flex-col gap-1">
            <input 
              className="bg-[#eeeff1] p-2 rounded text-sm"
              type="password" 
              {...register('password')}
              placeholder="Confirmar senha"
              />
            {errors.password && <span className="text-xs text-[#e14343]">{errors.password.message}</span>}
          </div>
          <p className="text-xs mt-4">Ao entrar ou se cadastrar, você concorda com nossa <span className="underline text-[#33bff3] cursor-pointer">Política de privacidade</span></p>
          <Button text="Criar Conta" linkPage="login"/>
          <p className="w-full flex justify-center items-center text-xs">Já possui uma conta?<Link href='/login' className="cursor-pointer text-[#33bff3]">Login</Link></p>
        </form>
        <p>{teste}</p>
      </div>
    </main>
  );
}
