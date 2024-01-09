function getStudentsByLocation(getListStudents, city) {
  return getListStudents.filter((e) => e.location === city);
}

export default getStudentsByLocation;
