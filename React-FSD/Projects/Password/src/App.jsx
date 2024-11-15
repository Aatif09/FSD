import "./App.css";
import React, { useState, useEffect } from "react";
import validator from "validator";

// const App = () => {
//   const [errorMessage, setErrorMessage] = useState("");

//   const validate = (value) => {
//     if (
//       validator.isStrongPassword(value, {
//         minLength: 8,
//         minLowercase: 1,
//         minUppercase: 1,
//         minNumbers: 1,
//         minSymbols: 1,
//       })
//     ) {
//       setErrorMessage("Is Strong Password");
//     } else {
//       setErrorMessage("Is Not Strong Password");
//     }
//   };

//   return (
//     <div>
//       <pre>
//         <h2> Strong Password Checker </h2>
//         <span>Enter UserName: </span>
//         <input type="text"></input>
//         <br></br>
//         <span>Enter Password: </span>
//         <input type="text" onChange={(e) => validate(e.target.value)}></input>
//         <br />
//         {errorMessage === "" ? null : (
//           <span style={{ fontWeight: "bold", color: "red" }}>
//             {errorMessage}
//           </span>
//         )}
//       </pre>
//     </div>
//   );
// };

// const App = () => {
//   const [errorMessage, setErrorMessage] = useState("");
//   const [password, setPassword] = useState("");

//   const validate = (value) => {
//     if (
//       validator.isStrongPassword(value, {
//         minLength: 8,
//         minLowercase: 1,
//         minUppercase: 1,
//         minNumbers: 1,
//         minSymbols: 1,
//       })
//     ) {
//       setErrorMessage("Is Strong Password");
//     } else {
//       setErrorMessage("Is Not Strong Password");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     validate(password);
//   };

//   return (
//     <div style={{ marginLeft: "200px" }}>
//       <pre>
//         <h2>Strong Password Checker</h2>
//         <form onSubmit={handleSubmit}>
//           <span>Enter UserName: </span>
//           <input type="text" />
//           <br />
//           <br />

//           <span>Enter Password: </span>
//           <input
//             type="password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <br />
//           <br />

//           <button type="submit">Submit</button>

//           <br />
//           {errorMessage === "" ? null : (
//             <span style={{ fontWeight: "bold", color: "red" }}>
//               {errorMessage}
//             </span>
//           )}
//         </form>
//       </pre>
//     </div>
//   );
// };

// const App = () => {
//   const [errorMessage, setErrorMessage] = useState("");
//   const [password, setPassword] = useState("");

//   const validate = (value) => {
//     if (
//       validator.isStrongPassword(value, {
//         minLength: 8,
//         minLowercase: 1,
//         minUppercase: 1,
//         minNumbers: 1,
//         minSymbols: 1,
//       })
//     ) {
//       setErrorMessage("Is Strong Password");
//     } else {
//       setErrorMessage("Is Not Strong Password");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevents page reload
//     validate(password); // Validates password on submit
//   };

//   // Using useEffect to validate password automatically whenever it changes
//   useEffect(() => {
//     if (password) {
//       validate(password); // Automatically trigger validation when password changes
//     }
//   }, [password]); // This effect depends on the 'password' state

//   return (
//     <div style={{ marginLeft: "200px" }}>
//       <pre>
//         <h2>Strong Password Checker</h2>
//         <form onSubmit={handleSubmit}>
//           <span>Enter UserName: </span>
//           <input type="text" />
//           <br />
//           <br />
//           <span>Enter Password: </span>
//           <input
//             type="password"
//             onChange={(e) => setPassword(e.target.value)} // Update password state
//           />
//           <br />
//           <br />
//           <button type="submit">Submit</button> {/* Submit button */}
//           <br />
//           {errorMessage === "" ? null : (
//             <span style={{ fontWeight: "bold", color: "red" }}>
//               {errorMessage}
//             </span>
//           )}
//         </form>
//       </pre>
//     </div>
//   );
// };

// const App = () => {
//   const [errorMessage, setErrorMessage] = useState('');
//   const [password, setPassword] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   const validate = (value) => {
//     if (validator.isStrongPassword(value, {
//       minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1
//     })) {
//       setErrorMessage('Is Strong Password');
//     } else {
//       setErrorMessage('Is Not Strong Password');
//     }
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page reload
//     setSubmitted(true); // Mark form as submitted
//   }

//   // Using useEffect to validate password on form submission
//   useEffect(() => {
//     if (submitted) {
//       validate(password); // Trigger validation after submission
//     }
//   }, [submitted, password]); // Effect depends on 'submitted' and 'password'

//   return (
//     <div style={{ marginLeft: '200px' }}>
//       <pre>
//         <h2>Strong Password Checker</h2>
//         <form onSubmit={handleSubmit}>
//           <span>Enter UserName: </span>
//           <input type="text" /><br /><br />

//           <span>Enter Password: </span>
//           <input
//             type="password"
//             onChange={(e) => setPassword(e.target.value)} // Update password state
//           /><br /><br />

//           <button type="submit">Submit</button>  {/* Submit button */}

//           <br />
//           {errorMessage === '' ? null :
//             <span style={{ fontWeight: 'bold', color: 'red' }}>
//               {errorMessage}
//             </span>
//           }
//         </form>
//       </pre>
//     </div>
//   );
// }

export default App;
