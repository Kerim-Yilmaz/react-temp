import {useState} from 'react'
import { CBadge, CButton, CCard, CCardBody, CCardHeader, CCol, CCollapse, CDataTable, CRow } from "@coreui/react";
import usersData from "./UsersData";



export default function User (){

    const [details, setDetails] = useState([])


    const getBadge = status => {
        switch (status) {
          case 'Active': return 'success'
          case 'Inactive': return 'secondary'
          case 'Pending': return 'warning'
          case 'Banned': return 'danger'
          default: return 'primary'
        }
      }
      const fields = [{ key: 'name', label: 'Kullanıcı adı' },'Kayıt Tarihi', 'Rolü', 'Durumu',{key: 'show_details',label: '',_style: { width: '1%' }, sorter: false,filter: false}]

      const toggleDetails = (index) => {
        const position = details.indexOf(index)
        let newDetails = details.slice()
        if (position !== -1) {
          newDetails.splice(position, 1)
        } else {
          newDetails = [...details, index]
        }
        setDetails(newDetails)
      }
    




    return(
        <>
        <CRow>
            <CCol>
                <CCard>
                    <CCardHeader>
                        Kullanıcı Görüntüleme İşlemleri
                    </CCardHeader>
                    <CCardBody>
                        <CDataTable
                        items={usersData}
                        fields={fields}
                        hover
                        striped
                        bordered
                        size='sm'
                        itemsPerPage={10}
                        pagination
                        scopedSlots = {{
                            'Durumu':
                              (item)=>(
                                <td>
                                  <CBadge color={getBadge(item.status)}>
                                    {item.status}
                                  </CBadge>
                                </td>
                              ),
                              'show_details':
                                (item, index)=>{
                                  return (
                                    <td className="py-2">
                                      <CButton
                                        color="primary"
                                        variant="outline"
                                        shape="square"
                                        size="sm"
                                        onClick={()=>{toggleDetails(index)}}
                                      >
                                        {details.includes(index) ? 'Gizle' : 'İşlemler'}
                                      </CButton>
                                    </td>
                                    )
                                },
                              'details':
                                  (item, index)=>{
                                    return (
                                    <CCollapse show={details.includes(index)}>
                                      <CCardBody>
                                        <h4>
                                          {item.username}
                                        </h4>
                                        <p className="text-muted">Kullanıcı Kayıt Tarihi: {item.registered}</p>
                                        <CButton size="sm" color="info">
                                            Kullanıcıya Rol Atama
                                        </CButton>
                                        <CButton size="sm" color="danger" className="ml-1">
                                          Kullanıcı Sil
                                        </CButton>
                                      </CCardBody>
                                    </CCollapse>
                                  )
                                }
            
                          }}
                        />
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    
        </>
    )
}