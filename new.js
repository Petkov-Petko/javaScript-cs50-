

// let obj={};


// let fetchRes = fetch(
//   "https://jsonplaceholder.typicode.com/todos/1");
 
//   fetchRes.then(res =>
//       res.json()).then(d => {
//         obj=d
//         //  console.log(d,obj)
//       })
// let obj1= {

//   "user":"stelio"
// }

// async function temp(){

// }

// let html=`
// <table>
//   <tr>
//     <th>${obj.userId}</th>
//     <th>Contact</th>
//     <th>${obj1.user}</th>
//   </tr>
//   <tr>
//     <td>Alfreds Futterkiste</td>
//     <td>Maria Anders</td>
//     <td>Germany</td>
//   </tr>
//   <tr>
//     <td>Centro comercial Moctezuma</td>
//     <td>Francisco Chang</td>
//     <td>Mexico</td>
//   </tr>
// </table>`

// document.body.innerHTML=html

// let obj = {};

// async function fetchData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     obj = await response.json();
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// let obj1 = {
//   "user": "stelio"
// };

// async function renderTable() {
//   await fetchData();

//   let html = `
//   <table>
//     <tr>
//       <th>${obj.userId}</th>
//       <th>Contact</th>
//       <th>${obj1.user}</th>
//     </tr>
//     <tr>
//       <td>Alfreds Futterkiste</td>
//       <td>Maria Anders</td>
//       <td>Germany</td>
//     </tr>
//     <tr>
//       <td>Centro comercial Moctezuma</td>
//       <td>Francisco Chang</td>
//       <td>Mexico</td>
//     </tr>
//   </table>`;

//   document.body.innerHTML = html;
// }

// renderTable();

let obj = {};

function fetchData() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => {
      obj = data;
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}

let obj1 = {
  "user": "stelio"
};

function renderTable() {
  fetchData()
    .then(() => {
      let html = `
      <table>
        <tr>
          <th>${obj.userId}</th>
          <th>Contact</th>
          <th>${obj1.user}</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </table>`;

      document.body.innerHTML = html;
    });
}

renderTable();
