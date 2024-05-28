import Link from "next/link"

type ButtonTypes = {
  text: string
  linkPage: string
}

export default function Button({text, linkPage}: ButtonTypes){
  return(
    // <Link href={linkPage} className="flex justify-center w-full">
      <button className="w-full p-2 bg-[#33bff3] rounded font-medium text-white" type="submit">{text}</button>
    // </Link>
  )
}