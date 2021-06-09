import axios from "axios";

export const BASE_URL = process.env.REACT_APP_API_V1;

const uploadNas = (file, password, sheetName, month, year, onUploadProgress) => {
  let formData = new FormData();

  formData.append("file", file);
  formData.append("password", password);
  formData.append("sheet_name", sheetName);
  formData.append("month", month);
  formData.append("year", year);

  const token = localStorage.getItem("accessToken")

  return axios.create({
    baseURL: BASE_URL,
    }).post("operation/pnl", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      "Authorization": "Bearer " + token,
    },
    onUploadProgress,
  }).then(response => {
    return response
  }).catch(function (error) {
    return error.response
  });
};

export default {
  uploadNas,
};