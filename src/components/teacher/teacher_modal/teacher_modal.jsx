import React, { useState } from "react";

// Import styled components
import {
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
import { Password } from 'primereact/password';


// Import Ant
import { CloseCircleOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";

import { Radio } from "antd";

function TeacherModal({ open, setOpen }) {
  const [date, setDate] = useState(null);
  const [name, setName] = useState("");
  const [value, setValue] = useState('');


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

  function handleClose(evt) {
    console.log(evt.target);
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
            <InputMask mask="99-999-99-99" placeholder="" />
          </TeacherModalLabel>
          <TeacherModalLabel>
            Tug’ilgan sana
            <Calendar value={date} onChange={(e) => setDate(e.value)} />
          </TeacherModalLabel>
          <TeacherModalLabel>
            Kim
            <InputText
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              <img alt="example" style={{ width: "100%" }} src={`previewImage`} />
            </Modal>
          </TeacherModalLabel>
          <TeacherModalLabel>
            Jins
            <Radio.Group defaultValue="" buttonStyle="solid" size="large">
              <Radio.Button value="a">Erkak</Radio.Button>
              <Radio.Button value="b">Ayol</Radio.Button>
            </Radio.Group>
          </TeacherModalLabel>
          <TeacherModalLabel>
            Parol
            <InputText
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </TeacherModalLabel>
        </TeacherModalInnerMain>
      </TeacherModalInner>
    </TeacherModalWrap>
  );
}

export default TeacherModal;
