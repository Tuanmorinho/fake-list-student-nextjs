import type { NextApiRequest, NextApiResponse } from 'next'
import { authenticated } from '../../../auth/auth';

type StudentInfo = {
    mssv: string;
    lastName: string;
    firstName: string;
    managementClass: string;
    sex: string;
    dob: string;
    phoneNumber: string;
    email: string;
}

type ClassGeneralInfo = {
    title: string;
    className: string;
    subject: string;
    branch: string;
    specialized: string;
    semester: string;
    year: string;
    educationLevel: string;
    typeOfTraining: string;
    students: StudentInfo[];
}

export const config = {
    api: {
        bodyParser: false,
    },
};

export default authenticated(function getStudents(req: NextApiRequest, res: NextApiResponse<ClassGeneralInfo>) {
    res.status(200).json({
        title: 'Danh sách sinh viên lớp học phần',
        className: '65IT5',
        subject: '461751',
        branch: 'Công nghệ thông tin',
        specialized: 'Công nghệ thông tin',
        semester: 'HK1 2022-2023',
        year: '2022',
        educationLevel: 'Đại học - B6',
        typeOfTraining: 'Chính quy',
        students: [],
    })
})