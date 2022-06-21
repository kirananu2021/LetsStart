import React, { Component } from "react";

class Users extends Component {
  constructor() {
    super();
    this.state = {profile:[]};
    
  }
  componentDidMount() {
    // consume an API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {this.setState({profile:data});
      console.log(this.state.profile)})
  }
//   render() {
//     return (
//       <>
//         <h1>List of users</h1>
//         <table class="table">
//           <thead>
//             <tr>
//               <th>name</th>
//               <th>username</th>
//               <th>email</th>
//               <th>phone</th>
//               <th>website</th>
//               <th>email</th>
//               <th>address</th>
//             </tr>
//           </thead>
//           <tbody>
//             {
//                 this.state.users.map((user,index)=> {
//                     return (
//                         <tr>
//                         <td>{index+1}</td>
//                         <td>{user.name}</td>
//                         <td>{user.username}</td>
//                         <td>{user.username}</td>
//                         <td>{user.email}</td>
//                         <td>{user.phone}</td>
//                         <td>{user.website}</td>
//                         <td>{user.email}</td>
//                         <td>{user.address.street}{user.address.city}</td>
//                         </tr>
//                     )
//                 })
//             }
//           </tbody>
//         </table>
//       </>
//     );
//   }
// }
}

export default Users; 