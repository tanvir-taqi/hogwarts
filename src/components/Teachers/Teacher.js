import React, { useContext } from 'react';
import { FakeDataContext } from '../../App';
import SingleTeacher from '../SingleTeacher/SingleTeacher';

const Teacher = () => {
    const teacherData = useContext(FakeDataContext)
    const teacherOnly = teacherData.filter(teacher => teacher.isActive ===true)
    return (
        <div className='py-40 px-10'>
                <p>
                  {
                    teacherOnly.map(teacher => <SingleTeacher
                    key={teacher._id}
                    teacher={teacher}
                    ></SingleTeacher>)
                  }
                </p>
        </div>
    );
};

export default Teacher;