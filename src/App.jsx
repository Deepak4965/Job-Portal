
import { useEffect, useState } from "react"
import Header from "./components/Header/Header"
import SearchBar from "./components/Header/SearchBar"
import JobCard from "./components/JobCard/JobCard"
import Navbar from "./components/Navbar/Navbar"
import JobData from './JobDummyData'
import { collection, query, orderBy, getDocs, where } from "firebase/firestore";
import { db } from '../firebase.config'

import Footer from "./components/Footer/Footer"
const App = () => {

  const [jobs, setJobs] = useState([]);
  const [customsearch, setCustomSearch] = useState(false)

  const fetchjobs = async () => {
    setCustomSearch(false)
    const tempJobs = []
    const jobsRef = query(collection(db, "jobs"))
    const q = query(jobsRef, orderBy("postedOn", "desc"))
    const req = await getDocs(q);
    req.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      })
    });
    setJobs(tempJobs);
  }

  const fetchJobsCustom = async (jobsCriteria) => {
    setCustomSearch(true)
    const tempJobs = []
    const jobsRef = collection(db, "jobs")
    let q = query(jobsRef)
    if (jobsCriteria.type) {
      q = query(q, where("type", "==", jobsCriteria.type))
    }
    if (jobsCriteria.title) {
      q = query(q, where("title", "==", jobsCriteria.title))
    }
    if (jobsCriteria.experience) {
      q = query(q, where("experience", "==", jobsCriteria.experience))
    }
    if (jobsCriteria.location) {
      q = query(q, where("location", "==", jobsCriteria.location))
    }
    q = query(q, orderBy("postedOn", "desc"))
    const req = await getDocs(q);
    req.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      })
    });
    setJobs(tempJobs);
  }

  useEffect(() => {
    fetchjobs()
  }, [])


  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar fetchJobsCustom={fetchJobsCustom} />
      {customsearch &&
      <button onClick={fetchjobs} className="flex pl-[1250px] mb-2">
        <p className="bg-blue-500 px-10 py-2 text-white">Clear Filters</p></button>
      }
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
<Footer />   </div>
  )
}

export default App
