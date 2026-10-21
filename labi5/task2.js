function giveJobToStudent(student, jobName) {
    let updatedStudent = {
        ...student,
        job: jobName
    };

    alert(`Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobName}`);

    return updatedStudent;
}

const student = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React']
};

const updatedStudent = giveJobToStudent(student, 'веб-разработчик');
console.log(updatedStudent);
