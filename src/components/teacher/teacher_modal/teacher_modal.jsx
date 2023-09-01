import React, { useEffect, useState } from "react";

// Add Teacher APi
import { useAddTeacherData } from "../../../api/useTeacherApi";

// Import styled components
import {
  TeacherModalBtn,
  TeacherModalInner,
  TeacherModalInnerMain,
  TeacherModalInnerTop,
  TeacherModalInnerTopBtn,
  TeacherModalInnerTopTitle,
  TeacherModalLabel,
  TeacherModalWrap,
} from "./style";

// Import PrimeReact
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { InputMask } from "primereact/inputmask";
import { Password } from "primereact/password";

// Import Ant
import { CloseCircleOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import { Radio } from "antd";
import { Spin } from 'antd';


function TeacherModal({ open, setOpen }) {

  // Input States
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [userDate, setUserDate] = useState(new Date().toLocaleDateString('fr-FR'));
  const [userDateValue, setUserDataValue] = useState("");
  const [userJob, setUserJob] = useState("");
  const [userJn, setUserJn] = useState("");
  const [userPassword, setUserPassword] = useState("") 

  const [loading, setLoading] = useState(false)

  const {mutate: addTeacher, isLoading, variables} = useAddTeacherData();
  
  function onTeacherDataSubmit(e) {
    e.preventDefault()

    setLoading(true)

    const data = {
      'name': name,
      'tel': tel, 
      'birthday': userDate,
      'who': userJob,
      'gens': userJn,
      'password': userPassword
    }

    addTeacher(data)
  }

  // if(status == "success") {
  //   setOpen(false)
  // }

  console.log(variables);

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
  });

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 5,
        }}
      >
        Upload
      </div>
    </div>
  );

  const handleChangeCalendar = (e) => {
    const stringDate = new Date(e.target.value).toLocaleDateString('fr-FR')
    setUserDate(stringDate)
    setUserDataValue(e.target.value)
  }

  function handleClose(evt) {
    if (
      evt.target.matches("#modal") ||
      evt.target.matches("#modal_close_btn")
    ) {
      setOpen(false);
    }
  }

  return (
    <TeacherModalWrap open={open} id="modal" onClick={handleClose}>
      <TeacherModalInner>
        <TeacherModalInnerTop>
          <TeacherModalInnerTopTitle>
            Yangi o'qituvchi qo'shish
          </TeacherModalInnerTopTitle>
          <TeacherModalInnerTopBtn>
            <CloseCircleOutlined onClick={() => setOpen(false)} />
          </TeacherModalInnerTopBtn>
        </TeacherModalInnerTop>
        <TeacherModalInnerMain>
          <TeacherModalLabel>
            ismi
            <InputText
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </TeacherModalLabel>
          <TeacherModalLabel>
            Telfon
            <InputMask mask="99-999-99-99" onChange={(e) => setTel(e.target.value)} />
          </TeacherModalLabel>
          <TeacherModalLabel>
            Tug’ilgan sana
            <Calendar value={userDateValue} onChange={handleChangeCalendar} />
          </TeacherModalLabel>
          <TeacherModalLabel>
            Kim
            <InputText
              className="form-input"
              value={userJob}
              onChange={(e) => setUserJob(e.target.value)}
            />
          </TeacherModalLabel>
          <TeacherModalLabel>
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-circle"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            <Modal
              open={previewOpen}
              title={previewTitle}
              footer={null}
              onCancel={handleCancel}
            >
              <img
                alt="example"
                style={{ width: "100%" }}
                src={`previewImage`}
              />
            </Modal>
          </TeacherModalLabel>
          <TeacherModalLabel>
            Jins
            <Radio.Group defaultValue="" buttonStyle="solid" size="large" onChange={(e) => setUserJn(e.target.value)}>
              <Radio.Button value="erkak">Erkak</Radio.Button>
              <Radio.Button value="ayol">Ayol</Radio.Button>
            </Radio.Group>
          </TeacherModalLabel>
          <TeacherModalLabel>
            Parol
            <InputText
              className="form-input"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </TeacherModalLabel>
            <TeacherModalBtn onClick={onTeacherDataSubmit}>{isLoading ? `loading` : 'Yuborish'}</TeacherModalBtn>
  
        </TeacherModalInnerMain>
      </TeacherModalInner>
    </TeacherModalWrap>
  );
}

export default TeacherModal;
