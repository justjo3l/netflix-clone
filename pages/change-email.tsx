import Head from "next/head"
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import useChangeEmail from "../hooks/useChangeEmail";

interface Inputs {
    email: string
    password: string
}

const toastStyle = {
    background: 'white',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '16px',
    padding: '15px',
    borderRadius: '9999px',
    maxWidth: '1000px',
  }

function changeEmail() {
    const [updated, setUpdated] = useState(false)
    const [toastId, setToastId] = useState<string>()
    const {user} = useAuth()
    const router = useRouter()

    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        if (user?.email !== data.email && updated) {

          useChangeEmail(data.email)
          
          router.replace('/')

          if (toastId) {
              setToastId(toast(`${data.email} has been saved as your email address`, {
                  duration: 4000,
                  style: toastStyle,
                  id: toastId,
                }))
          } else {
              setToastId(toast(`${data.email} has been saved as your email address`, {
                  duration: 4000,
                  style: toastStyle,
                }))
          }
            
        }
    };

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
        <Head>
            <title>Change Email - Netflix</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <header className="bg-[#141414]">
        <Link href="/">
          <img
            src="https://rb.gy/ulxxee"
            width={120}
            height={120}
            className="cursor-pointer object-contain"
          />
        </Link>
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </header>

        <form onSubmit={handleSubmit(onSubmit)} className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
            <h1 className="text-4xl font-semibold">Change Email</h1>
            <div className="space-y-4">
                <label className="inline-block w-full">
                    <input type="email" placeholder="New Email" className="input" {...register("email", {required: true})}/>
                </label>
            </div>

            <button type="submit" className="w-full rounded bg-[#e50914] py-3 font-semibold" onClick={() => setUpdated(true)}>
                Save
            </button>
        </form>
    </div>
  )
}

export default changeEmail