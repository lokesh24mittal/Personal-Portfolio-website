import React from "react";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { IoGitNetworkOutline } from "react-icons/io5";
import { BsDatabaseDown } from "react-icons/bs";
import { IoShieldCheckmark } from "react-icons/io5";
import "../Components/Global.css"

const About = ({bgcolor,darkmode}) => {
  return (
    <>
      <div className="relative h-full">
        <div className={`${darkmode==="dark" ? `bg-${bgcolor}` : `bg-white`} p-10 rounded-lg`}>
          <h1 className={`text-3xl font-bold ${bgcolor==="white" ? "text-black" :"text-white"}`} >About</h1>
          <p className="my-4  lg:text-nowrap "
           style={{ color: `${bgcolor==="white" ? "#000000" : "#A6A6A6"}`}}
          >
            {/* I have Completed My <span className="font-bold">B.Tech Degree </span>From Ganga institute of technology and management  <br /> Engineering College, Kabalana. */}
            {/* My Specilization in <span className="font-bold">Computer Science Engineering (CSE)</span> */}
              I am a dedicated<span className="font-bold"> React Developer</span> with<span className="font-bold"> almost two years of experience </span> at <span className="font-bold">Tech Mahindra,</span><br/> 
              where I've honed my skills in building<span className="font-bold"> dynamic</span> and <span className="font-bold">responsive</span> web applications.
             {/* My expertise lies in leveraging the React framework to create seamless user experiences and optimize performance.<br/>  */}



{/* I am passionate about continuous learning and staying updated with industry trends, which enables me to implement best practices in my work. I thrive in fast-paced environments and am committed to contributing to innovative projects that make a difference. */} 
            <br />{" "}
          </p>

          <p className="lg:text-nowrap"
           style={{ color: `${bgcolor==="white" ? "#000000" : "#A6A6A6"}`}}       
          >
            {/* My aim is to bring across your message and identity in the most
            creative way. I <br />
            creates <span className="font-bold">web design</span> for different screen sizes.<br/>
            <br/>
            Proven ability to create <span className="font-bold">reusable components </span> for an
            enterprise-level web application.<br/>Passionate about <span className="font-bold">technology and building scalable web
            solutions </span> */}

           During my time at Tech Mahindra, I have collaborated with cross-functional teams
          to deliver high-quality<br/> software solutions, focusing on code efficiency and maintainability.
          I have experience in integrating<br/>
           RESTful APIs, managing state with Redux, and utilizing modern front-end tools and libraries.



          </p>
          <h1 className="text-2xl my-5 font-italic"
           style={{ color: `${bgcolor==="white" ? "#000000" : "white"}`}}  
          >What I DO!</h1>

          <div className="flex gap-5 flex-wrap ">
            <div className="ui-ux-design w-80 flex gap-3 p-4 rounded-lg" style={{background:`${bgcolor==="white" ? "#FFF4F4" :"black"}`,  border:`${bgcolor==="white" ? "none" :"1px solid #A6A6A6"}`}}>
              <div>
                <LiaSwatchbookSolid className="text-4xl my-2 text-purple-600" />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className={`font-bold my-2 ${bgcolor==="white" ? "text-black" :"text-white"}`} 
                >Frontend Developement</h1>
                <p className="text-sm"
                 style={{ color: `${bgcolor==="white" ? "#000000" : "#A6A6A6"}`}}
                >
                 With a deep understanding of <span className="font-bold">HTML, CSS, JavaScript</span>, and modern frameworks like <span className="font-bold">React</span>
                  .I transform design concepts into dynamic, user-friendly websites. 
                </p>
              </div>
            </div>

            <div className="ui-ux-design w-80 flex gap-3 p-4 rounded-lg" style={{background:`${bgcolor==="white" ? "#EEF5FA" : "black"}` ,border:`${bgcolor==="white" ? "none" :"1px solid #A6A6A6"}`}}>
              <div>
                <IoGitNetworkOutline className="text-4xl my-2 text-yellow-600" />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className={`font-bold my-2 ${bgcolor==="white" ? "text-black" :"text-white"}`}>Git & Github</h1>
                <p className="text-sm"
                  style={{ color: `${bgcolor==="white" ? "#000000" : "#A6A6A6"}`}}
                >
                   It's used for <span className="font-bold">storing, tracking, and collaborating on software projects </span>. It makes it easy for developers to share code files.
                </p>
              </div>
            </div>

            <div className="ui-ux-design w-80 flex gap-3 p-4 rounded-lg" style={{background:`${bgcolor==="white" ? "#EEF5FA" :"black"}`,border:`${bgcolor==="white" ? "none" :"1px solid #A6A6A6"}`}}>
              <div>
                <BsDatabaseDown className="text-4xl my-2 text-blue-400" />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className={`font-bold my-2 ${bgcolor==="white" ? "text-black" :"text-white"}`}>Backend Developement</h1>
                <p className="text-sm"
                 style={{ color: `${bgcolor==="white" ? "#000000" : "#A6A6A6"}`}}
                >
                   Design <span className="font-bold">Restful APIs</span> that are easy to integrate, ensuring seamless data exchange across platforms.
                </p>
              </div>
            </div>

            <div className="ui-ux-design w-80 flex gap-3 p-4 rounded-lg " style={{background:`${bgcolor==="white" ? "#FFF4F4" :"black"}`,border:`${bgcolor==="white" ? "none" :"1px solid #A6A6A6"}`}}>
              <div>
                <IoShieldCheckmark className="text-4xl my-2 text-green-500" />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className={`font-bold my-2 ${bgcolor==="white" ? "text-black" :"text-white"}`}>Testing APIs</h1>
                <p className="text-sm"
                 style={{ color: `${bgcolor==="white" ? "#000000" : "#A6A6A6"}`}}
                >
                 Test APIs from <span className="font-bold">authentication to error handling </span>,our Postman-driven testing process ensures seamless integration and reliable performance across all endpoints
                </p>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default About;
