import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useState} from 'react'
import {useForm} from "react-hook-form";
import {db} from '../firebase/firebase'
const ContactForm = ()=>{
    const [sent, setSent] = useState(false);
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
      console.log(data)
    db.collection("contact-forms")
      .add({
        name: data["name"],
        email: data["email"],
        subject:data["subject"],
        message: data["description"]
      })
      .then(() => {
        console.log("feedback sent!");
        setSent(true);
      })
      .catch((error) => {
        console.error("error sending feedback: ", error);
      });
  };
    return(
        <>
        {sent?(
            <h3>🎉 Thanks for reaching out!</h3>
        ):(
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField id="standard-basic" required {...register("name")} label="Name" variant="standard" style={{width:"75vw",marginTop:"10px"}}/>
            <TextField id="standard-basic" required {...register("email")} label="Email" variant="standard" style={{width:"75vw",marginTop:"10px"}}/>
            <TextField id="standard-basic" required {...register("subject")} label="Subject" variant="standard" style={{width:"75vw",marginTop:"10px"}}/>
            <TextField id="standard-basic" required {...register("description")} label="Description" variant="standard" multiline rows={7}style={{width:"75vw",marginTop:"10px"}}/>
            <br></br>
            <br></br>
            <br></br>
            <Button variant="outlined"type="submit">submit</Button>
            <br></br>
            <br></br>
            <br></br>
        </form>)
}
        </>
    )
}

export default ContactForm