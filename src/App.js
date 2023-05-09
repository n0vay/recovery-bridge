import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Settings from "./pages/settings"
import About from "./pages/about"
import DoctorSearch from "./pages/doctor/doctorSearch";
import PatientInformation from "./pages/patient/patientInformation";
import PatientHistory from "./pages/patient/patientHistory";
import PatientMedication from "./pages/patient/patientMedication";
import PatientPrediction from "./pages/patient/patientPrediction";
import PatienTest from "./pages/patient/patientTest";
import PatientVitals from "./pages/patient/patientVitals";
import SignIn from "./pages/signin";  
import SignUp from "./pages/signup";
import SignUpAuthentication from "./pages/signupauth";
import SignInAuthentication from "./pages/signinauth";
import { Account } from "./account";
import Status from "./status";
function App() {
  return <>
    <Account>
    <BrowserRouter>
      <Routes>
        <Route path="/status" exact element = {<Status />}></Route>
        <Route path="/" exact element = {<Home />}></Route>
        <Route path="/about" exact element = {<About />}></Route>
        <Route path="/settings" exact element = {<Settings />}></Route>

        {/* Login and Signup Routes */}
        <Route path="/signin" exact element = {<SignInAuthentication />}></Route>
        <Route path="/signup" exact element = {<SignUpAuthentication />}></Route>
        


        {/* Doctor Routes */}
        <Route path="/doctorsearch" exact element = {<DoctorSearch />}></Route>
        
        {/* Patient Routes */}
        <Route path="/patientinformation" exact element = {<PatientInformation />}></Route>
        <Route path="/patienthistory" exact element = {<PatientHistory />}></Route>
        <Route path="/patientmedication" exact element = {<PatientMedication />}></Route>
        <Route path="/patientprediction" exact element = {<PatientPrediction />}></Route>
        <Route path="/patienttest" exact element = {<PatienTest />}></Route>
        <Route path="/patientvitals" exact element = {<PatientVitals />}></Route>

      </Routes>
    </BrowserRouter>
    </Account>
  </>
}

export default App;
