import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const RedirectToDashboard = () => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/dashboard')
    }, [])
    return null
}

export default RedirectToDashboard