function getListStudentIds(studentList) {
  // Check if the argument is an array
  if (!Array.isArray(studentList)) {
    return [];
  }
  const idList = studentList.map((e) => e.id);

  return idList;
}
export default getListStudentIds;
