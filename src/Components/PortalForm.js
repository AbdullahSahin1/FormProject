import React from "react";
import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";
import { Link } from "react-router-dom";
const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};
function PortalForm() {
  return (
    <>
      <Formik
        initialValues={{ userName: "", University: "", isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomInput
              label="kullanıcı adı"
              name="userName"
              type="text"
              placeholder="Kullanıcı adınızı giriniz"
            />
            <CustomSelect
              label="Okulunuz"
              name="university"
              placeholder="Lütfen okulunuzu giriniz"
            >
              <option value={""}>Lütfen üniversitenizi seçiniz</option>
              <option value="bogazici">Boğaziçi Üniversitesi</option>
              <option value="gsu">Galatasaray Üniversitesi</option>
              <option value="ytu">Yıldız Teknik Üniversitesi</option>
              <option value={"diger"}>Diğer Üniversite</option>
            </CustomSelect>
            <CustomCheckbox type="checkbox" name="isAccepted" />
            <button disabled={isSubmitting} type="submit">
              Kaydet
            </button>
            <Link className="link" to="/">
              Ana sayfaya dön
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm;

