import React, { useContext } from 'react';
import { FakeDataContext } from '../../App';
import SingleStudent from '../SingleStudent/SingleStudent';

const Students = () => {
    const teacherData = useContext(FakeDataContext)
    const studentOnly = teacherData.filter(student => student.isActive ===false)
    return (
        <div className='py-32'>
            {
                studentOnly.map(student=><SingleStudent
                key={student._id}
                student ={student}
                ></SingleStudent>)
            }
        </div>
    );
};

export default Students;