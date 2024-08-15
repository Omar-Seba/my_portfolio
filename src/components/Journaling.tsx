import React from 'react'
import JobDescription from "./JobDescription";


const Journaling = () => {
  return (
    <div className="flex flex-col gap-4 px-[54px] max-lg:px-[30px] py-[40px] max-lg:py-[30px] rounded-primary h-full bgMain">
      <div className="flex justify-between border-white pb-4 border-b-2 border-opacity-10">
        <h1 className="w-[80%] text-htwo">
          <span className="font-semibold">Omar SEBA</span>
          <span className="pl-4 font-regular">
            {" "}
            Engineer, Software Developer, Designer
          </span>
        </h1>
        {/* <FiArrowUpRight
                  size={24}
                  className="w-fit h-fit text-secondary"
                /> */}
      </div>
      <p className="font-extralight text-hsix">Journaling</p>
      <div>
        <ul className="flex flex-col gap-6 px-4 max-lg:px-0">
          <JobDescription
            date={"25 janv"}
            title={"Started a new mobile design project."}
          />
          <JobDescription
            date={"25 janv"}
            title={
              "Received a certification in advanced UX design techniques."
            }
          />
          <JobDescription
            date={"25 janv"}
            title={
              "Completed a user research phase for an ongoing web design project."
            }
          />
          <JobDescription
            date={"25 janv"}
            title={
              "Attended a workshop on the latest trends in UI animation."
            }
          />
          <JobDescription
            date={"25 janv"}
            title={"Launched a redesigned website for a major client."}
          />
        </ul>
      </div>
    </div>
  )
}

export default Journaling