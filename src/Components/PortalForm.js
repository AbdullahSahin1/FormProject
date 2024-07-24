import React from 'react';
import {Form , Formik} from 'formik'
import CustomInput from './CustomInput';
import { advancedSchema } from '../schemas';
const onSubmit = async (values,actions) =>{
  await new Promise((resolve)=>{
    setTimeout(resolve,1000)
  })
  actions.resetForm()
}
function PortalForm() {
  return <>
      {' '}
     <Formik
       initialValues={{ userName: '', University: '', isAccepted: false }}
       onSubmit= {onSubmit}
       validationSchema={advancedSchema}
     >
       {() => (
         <Form>
           <CustomInput label = "kullanıcı adı"  name = "userName" type="text" placeholder= "Kullanıcı adınızı giriniz"/>
          
         </Form>
       )}
     </Formik>
  </>;
}

export default PortalForm;
