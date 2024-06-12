import * as Yup from "yup";

export const personalInformationSchema = Yup.object().shape({
  firstName: Yup.string().required("پر کردن فیلد الزامی است"),
  lastName: Yup.string().required("پر کردن فیلد الزامی است"),
  email: Yup.string().email("آدرس ایمیل معتبر نیست"),
  nationalCode: Yup.number().required("پر کردن فیلد الزامی است"),
  gender: Yup.string().required("انتخاب جنسیت الزامی است"),
});

export const legalInformationSchema = Yup.object().shape({
  organizationName: Yup.string().required("پر کردن فیلد الزامی است"),
  economicCode: Yup.number().required("پر کردن فیلد الزامی است"),
  nationalId: Yup.number().required("پر کردن فیلد الزامی است"),
  registrationId: Yup.number().required("پر کردن فیلد الزامی است"),
  state: Yup.string().required("پر کردن فیلد الزامی است"),
  city: Yup.string().required("پر کردن فیلد الزامی است"),
  phoneNumber: Yup.number().required("پر کردن فیلد الزامی است"),
});

export const loginValidationSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(/^(\+98|0098|98|0)?9\d{9}$/g, {
      message: "این شماره موبایل معتبر نمی باشد.",
    })
    .required("پر کردن فیلد الزامی است"),
});
