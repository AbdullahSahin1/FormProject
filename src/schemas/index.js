import * as yup from 'yup'
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/

export const basicSchema = yup.object().shape({
    email: yup.string().email('Geçerli bir email giriniz').required('E mail girmek zorunludur'),
    age: yup.number().positive('Lütfen doğru bir sayı giriniz').integer('Lütfen yaşınızı giriniz').required('Yaş girmek zorunludur'),
    password: yup.string().min(5,'Minimum 5 karakter giriniz').matches(passwordRules,{message:'Lütfen en az bir büyük bir küçük harf ve bir sayı giriniz'}).required('Şifre girmek zorunludur'),
    confirmPassword: yup.string().oneOf([yup.ref('password')],'şifreler eşleşmiyor').required('Tekrar şifre girmek zorunludur')
})