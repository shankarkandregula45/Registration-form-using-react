import React, { useState } from "react";
import { TextField, Button, Paper, Typography } from "@mui/material";
import "./registration-form.css";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, number });
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setNumber("");
  };

  return (
    <div className="form-container">
      <Paper elevation={24} className="form-paper">
        <h2 className="form-title">
          REGISTRATION FORM
        </h2>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            fullWidth
            margin="normal"
            required
          />

          <div className="button-group">
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
            <Button
              type="button"
              variant="outlined"
              color="secondary"
              onClick={handleReset}
            >
              Reset
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
}

export default RegistrationForm;

































// import React, { useState } from "react";
// import { TextField, Button } from "@mui/material";
// import "./registration-form.css";

// function RegistrationForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [number, setNumber] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({ name, email, number });
//   };

//   const handleReset = () => {
//     setName("");
//     setEmail("");
//     setNumber("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <TextField
//         label="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         fullWidth
//         margin="normal"
//         required
//       />
//       <TextField
//         label="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         fullWidth
//         margin="normal"
//         required
//       />
//       <TextField
//         label="Number"
//         value={number}
//         onChange={(e) => setNumber(e.target.value)}
//         fullWidth
//         margin="normal"
//         required
//       />

//       <Button
//         type="submit"
//         variant="contained"
//         color="primary"
//         style={{ marginRight: "10px" }}
//       >
//         Submit
//       </Button>
//       <Button
//         type="button"
//         variant="outlined"
//         color="secondary"
//         onClick={handleReset}
//       >
//         Reset
//       </Button>
//     </form>
//   );
// }

// export default RegistrationForm;




















// // import React, {useState} from "react";
// // import {
// //     textField,
// //     Button,
// // } from "@mui/material";

// // function RegistrationForm() {
// //     const[name,setName] = useState("");
// //     const[email,setEmail] = useState("");
// //     const[Number,setNumber] = useState("");

// //     const handleSubmit=(e) =>{
// //         e.preventDefault();
// //         console.log({name,email,Number});
// //     }

// //     const handleReset=() =>{
// //         setName("");
// //         setEmail("");
// //         setNumber("");
// //     }

// //     return (
// //         <form onSubmit={handleSubmit}>
// //             <TextField
// //                 label="Name"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //                 fullWidth
// //                 margin="normal"
// //                 required
// //             />
// //             <TextField
// //                 label="Email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 fullWidth
// //                 margin="normal"
// //                 required
// //             />
// //             <TextField
// //                 label="Number"
// //                 value={Number}
// //                 onChange={(e) => setNumber(e.target.value)}
// //                 fullWidth
// //                 margin="normal"
// //                 required
// //             />

// //             <Button type="submit" variant="contained" color="primary" style={{marginRight: '10px'}}>
// //                 Submit
// //             </Button>
// //             <Button type="button" variant="outlined" color="secondary" onClick={handleReset}>
// //                 Reset
// //             </Button>
// //         </form>
// //     );
// // }

// // export default RegistrationForm