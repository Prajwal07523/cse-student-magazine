import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  "./AddMagazine.css"

function AddMagazine() {
  const [image, setImage] = useState(null);
  const [pdf, setPdf] = useState(null); // State variable for the PDF file
  const [Magazine, setMagazine] = useState(null);
  const [title, settitle] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    getImage();
  }, []);

  const submitImage = async (e) => {
    e.preventDefault();
  
    try {
      const result = await axios.post(
        "http://localhost:5000/add-magazine", {
            title: title,
            year: year,
            imageUrl: image,
            pdfUrl: pdf
            });
            console.log(result.data);
            
            toast.success('Successfully added!', {
                position: "top-right",
                autoClose: 3000, // milliseconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              });

            getImage(); 
        } catch (error) {
            console.error("Error submitting data:", error);
            }
     };


  const getImage = async () => {
    try {
      const result = await axios.get("http://localhost:5000/get-magazines");
      setMagazine(result.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

  return (
    <div className="container1">
        <ToastContainer />
    <div className="formContainer">
    <h2 className="heading">Add Magazine</h2>
      <form onSubmit={submitImage} className="form">
    <input type="text" placeholder="image" value={image} onChange={(e) => setImage(e.target.value)} className="inputField" required/>
    <br/>
    <input type="text" placeholder="pdf" value={pdf} onChange={(e) => setPdf(e.target.value)} className="inputField" required/>
    <br/>
    <input type="text" placeholder="title" value={title} onChange={(e) => settitle(e.target.value)} className="inputField" required/>
    <br/>
    <input type="text" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} className="inputField" required/>
    <br/>
        <button type="submit" className="submitButton">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default AddMagazine;
