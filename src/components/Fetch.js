import { query,collection,  onSnapshot, orderBy, limit } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import Pagination from '@mui/material/Pagination';

export default function Fetch() {
  const[alldocs,setallDocs]=useState([]); 
  
  function fetchdata() {
     const q= query(collection(db,'querydata'),orderBy("time","desc"))
     const udata =onSnapshot(q,(querySnapshot)=>{
      let uarray =[]
      querySnapshot.forEach((doc)=>{
        uarray.push({...doc.data(),id:doc.id})
      });
      setallDocs(uarray)
      

    });
    console.log(alldocs.length)
  }
  useEffect(() => {
    
    return fetchdata();
  },[] );
  return (
    
    <div>
      <h1 className="text-4xl text-center font-serif p-2">Company Name </h1>
  
        <div className="flex mt-5 text-lg font-semibold">
          <p className="w-56 text-center">Date</p>
          <p className="w-56 text-center">Name</p>
          <p className="w-72 text-center">Email</p>
          <p className="w-72 text-center">Contact</p>
          <p className="w-96 text-center">Enquiry</p>
        </div>
        
  
      {alldocs.map((val,index) => {
        const em="https://mail.google.com/mail/?view=cm&fs=1&to="+ val.useremail;
        return (
          <div className="flex w-auto">
          <tbody className="border-solid border-2">

          {/* <td>{index+1}</td> */}
          <td className="w-56 text-center">{val.time}</td>
          <td className="w-56 text-center">{val.username}</td>
          <td className="w-72 text-center">{val.useremail}</td>
          <td className="w-72 text-center">{val.usercontact}</td>
          <td className="w-96">{val.usermessage}</td>
          <td className="w-32 text-center bg-green-600"><a href={em} target="_blank" rel="noreferrer">Reply</a></td>
          </tbody>
          </div>
        );
      })}
      {/* <Pagination count={Math.ceil(alldocs.length/10)}></Pagination> */}
    </div>
  );
}
