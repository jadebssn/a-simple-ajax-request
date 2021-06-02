const retrieve_attendance = () => {
  //making an AJAX call
  fetch(
    "https://classes.codingbootcamp.cz/api/attendance/coding-bootcamp/spring-2021/2021-06-01"
  )
    .then((r) => r.json()) //turns the promise into a json (R refers to response, but it could be anything)
    .then((data) => {
      //'data' could be anything
      // data received
      console.log(data);
      console.log(data.attendance);

      const list = document.getElementById("list"); // taking the list created in html
      const students = data.attendance; //picking the attendance property
      students.forEach((student) => {
        // looping through each student and adding their name to our list
        list.innerHTML += `<li>${student.name}</li>`; //we are displaying their name, but here that could be the id, or the from
      });
    });
};

retrieve_attendance(); // calling our function
