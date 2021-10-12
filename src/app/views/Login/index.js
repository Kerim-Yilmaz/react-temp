import jwtDecode from 'jwt-decode';
import React, { useState,useEffect } from 'react'
import { toast } from 'react-toastify';
import history from '../../../history';
import useAuth from '../../hooks/useAuth';

import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

export default function LoginPage() {

    const {login}=useAuth()
    const [loginData,setLoginData] = useState({
        username:'',
        password:'',
    })

    useEffect(() => {
        const token = localStorage.getItem('accessToken')
       if(token){
        const decodedToken = jwtDecode(token)
        const currentTime = Date.now()/1000
        if(decodedToken.exp>currentTime){
            return history.push('/')
        }
       }
    }, [])
    
    const handleChange = (e)=>{
        
        const {type,value}=e.target;
        if(type==='text'){
            setLoginData((prevState)=>({...prevState,username:value}))
        }else{
            setLoginData((prevState)=>({...prevState,password:value}))

        }
    }


    const handleSubmit = async (e)=>{
        e.preventDefault();
       try {
           if(loginData.username.length<3 || loginData.password.length<3){
               return toast.error('En az 3 karakter girmelisiniz')
           }
           await login(loginData).then(()=>{
               history.push('/')
               toast.success('Hoşgeldiniz')
            })
               .catch(e=>
                toast.error('Hatalı kullanıcı adı veya şifre'))
           
       } catch (e) {
       }
    }
   
    return (
        <>
              <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h1>Giriş Yap</h1>
                    <p className="text-muted">Hesabınıza giriş yapınız</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Kullanıcı Adı" value={loginData.username} onChange={handleChange} autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Şifre" value={loginData.password} onChange={handleChange} autoComplete="current-password" />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" type='submit' className="px-4">Giriş Yap</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Bizim İnternet</h2>
                    <p>Kapı Geçiş Uygulaması, ayarlar ve geçişleri listeleme ekranı</p>
                   
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
        </>
    )
}
