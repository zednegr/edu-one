
// *Components
import AsideNav from "../../components/aside_nav/aside_nav"
import Fixed from "../../components/fixed/fixed"
import TeacherCard from "../../components/teacher/teacher_card/teacher_card"


function Teacher() {


  return (
    <>
      <Fixed content={<Main />} />
    </>
  )
}

function Main() {

  return (
    <>
      <AsideNav name={`O'qituvchilar`} size={'23'} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
      </div>
    </>
  )
}


export default Teacher