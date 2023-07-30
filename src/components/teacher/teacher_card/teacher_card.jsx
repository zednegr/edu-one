import { TeacherCardAvatar, TeacherCardBox, TeacherCardCon, TeacherCardJob, TeacherCardName, TeacherCardWrap } from "./style"


function TeacherCard() {

    return (
        <TeacherCardWrap className="card" tooltipOptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }}>
            <TeacherCardBox>
                <TeacherCardAvatar src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
                <TeacherCardCon>
                    <TeacherCardName>Abdullox</TeacherCardName>
                    <TeacherCardJob>Frontend</TeacherCardJob>
                </TeacherCardCon>

            </TeacherCardBox>
        </TeacherCardWrap>
    )
}

export default TeacherCard