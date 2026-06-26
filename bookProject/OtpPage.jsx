// import React, { useRef } from "react";
// import Footer from "../components/Footer";
// import NavBar from "../components/NavBar";
// import { useNavigate } from 'react-router-dom';
// import { useAuthStore } from '../stores/authStore';

// const OtpPage = () => {
//   const inputRefs = useRef([]);

//       const navigate = useNavigate();
//     const { isLoading, error, signupVerification,email } = useAuthStore();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//       console.log("Submit clicked");

//    const otp =inputRefs.current.map((input)=>input.value).join("");
//    console.log(otp);
   
  
    
//     const result = await signupVerification(otp);
//       console.log("Result:", result);
    
//     if (result) {
//       navigate("/login");
//     }
//   }

//   return (
//     <>
//       <NavBar />

//       <section className="min-h-screen bg-gradient-to-br from-zinc-950 via-slate-950 to-zinc-900 flex items-center justify-center px-4 relative overflow-hidden">
//         {/* Background Glow */}
//         <div className="absolute -top-40 -left-40 h-120 w-120 rounded-full bg-teal-400/20 blur-[120px]"></div>
//         <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-teal-400/10 blur-[120px]"></div>

//         {/* OTP Form */}
//         <form onSubmit={handleSubmit}
//           className="
//             relative z-10
//             w-full max-w-md
//             p-8
//             rounded-3xl
//             bg-white/5
//             backdrop-blur-2xl
//             border border-slate-700/50
//             shadow-[0_0_40px_rgba(20,184,166,0.15)]
//           "
//         >
//           <h1 className="text-3xl font-bold text-center text-white mb-3">
//             Sign Up Verification
//           </h1>
          
//         <div className="flex flex-col  gap-2">
//           <p className="text-center text-slate-400 ">
//             Enter the 6-digit code sent to your email
//           </p>
//            {error && <p className='text-red-500 text-center '>{error}</p>}
//         </div>
          

//           <div className="flex justify-center gap-3 my-4">
//             {[1, 2, 3, 4, 5, 6].map((num, i) => (
//               <input
//               id={i}
//               name="otp"

//                 key={num}
//                 ref={(el) => (inputRefs.current[i] = el)}
//                 type="text"
//                 maxLength={1}
//                 required
//                 onChange={(e) =>
//                   e.target.value && inputRefs.current[i + 1]?.focus()
//                 }
//                 onKeyDown={(e) =>
//                   e.key === "Backspace" &&
//                   !e.target.value &&
//                   inputRefs.current[i - 1]?.focus()
//                 }
//                 className="
//                   w-14 h-14
//                   rounded-2xl
//                   bg-slate-900/40
//                   border border-slate-700/50
//                   text-center text-xl text-white
//                   outline-none
//                   focus:border-teal-400
//                   focus:shadow-[0_0_20px_rgba(45,212,191,0.4)]
//                   transition-all duration-300
//                 "
//               />
//             ))}
//           </div>

//           <button
//             type="submit"
//             className="
//               w-full py-3
//               rounded-2xl
//               bg-teal-500
//               text-black
//               font-semibold
//               hover:bg-teal-400
//               hover:shadow-[0_0_30px_rgba(45,212,191,0.5)]
//               transition-all duration-300
//             "
//           >
//               {isLoading ? "Loading..." : "Verify Otp"}
//           </button>

//           <p className="text-center text-slate-400 mt-6">
//             Didn't receive the code?
//             <button
//               type="button"
//               className="ml-2 text-teal-400 hover:text-teal-300"
//             >
//               Resend OTP
//             </button>
//           </p>
//         </form>
//       </section>

//       <Footer />
//     </>
//   );
// };

// export default OtpPage;