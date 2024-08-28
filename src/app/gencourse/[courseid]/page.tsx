import { getAuthSession } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { redirect } from 'next/navigation'
import React from 'react'
import { Info } from "lucide-react";
import ConfirmChapters from '@/components/ConfirmChapters';
type Props = {params:{courseid:string}}

const createChapters = async ({params:{courseid}}: Props) => {
    const session=await getAuthSession()
    if(!session?.user){
        return redirect('/gallery')
    }
    const course=await prisma.course.findUnique({
        where:{
            id:courseid
        },
        include:{
            units:{
                include:{
                    chapters:true
                }
            }
        }
    })
    if (!course){
        return redirect("/gencourse")
    }
  return (
    <div className="flex flex-col items-start max-w-xl px-8 mx-auto my-16 sm:px-0">
        {/* <pre>{JSON.stringify(course,null,2)}</pre> */}
        <h5 className="text-sm uppercase text-seconday-foreground/60">
        Course Name
      </h5>
      <h1 className="text-5xl font-bold">{course.name}</h1>

      <div className="flex p-4 mt-5 border-none bg-secondary">
        <Info className="w-12 h-12 mr-3 text-violet-400" />
        <div>
          We generated chapters for each of your units. Look over them and then
          click the Button to confirm and continue.If the boxes are red this shows the courses are not generated so click on refresh and then click generate again 
        </div>
      </div>
    <ConfirmChapters course={course}/>
    </div>
  )
}

export default createChapters