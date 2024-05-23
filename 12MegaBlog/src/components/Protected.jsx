import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Protected({children, authentication = true}) {
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate();

  useEffect(() => {
    if(authentication && authStatus !== authentication){
      console.log('authStatus: ', authStatus)
      navigate("/login")
    } else if(!authentication && authStatus !== authentication){  //For pages that doesnt require authentication(i.e Login, Signup), user is logged in, then they dont have to go to those pages that doesnt require authentication, so we redirect them to home page
      navigate("/");
    }
    setLoader(false)
  }, [authStatus, authentication, navigate])
  

  return (
    <>
      {loader && children}
    </>
  )
}

export default Protected