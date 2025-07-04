import { useState } from "react"

const SearchBar = (props) => {

    const [jobsCriteria, setJobsCriteria] = useState({
        title: "",
        location: "",
        experience: "",
        type: ""
    })

    const handleChange = (e) => {
        setJobsCriteria((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    console.log(jobsCriteria);

    const search = async () => {
        await props.fetchJobsCustom(jobsCriteria)
    }

    return (
        <div className="flex flex-col md:flex-row flex-wrap gap-5 my-10 justify-center px-4 md:px-10">

            {/* Select Job Search */}

            <select onChange={handleChange} name="title" value={jobsCriteria.title}
                className="w-full md:w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md">
                <option value='' disabled hidden>Job Role</option>
                <option value='iOS Developer'>iOS Developer</option>
                <option value='Frontend Developer'>Frontend Developer</option>
                <option value='Backend Developer'>Backend Developer</option>
                <option value="FullStack Developer">FullStack Developer</option>
                <option value="Data Analyst">Data Analyst</option>
                <option value="Java FullStack Developer">Java FullStack Developer</option>
                <option value='Android Developer'>Android Developer</option>
            </select>

            {/* Job Type */}
            <select onChange={handleChange} name="type" value={jobsCriteria.type}
                className="w-full md:w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md">
                <option value='' disabled hidden>Job Type</option>
                <option value='Full Time'>Full Time</option>
                <option value='Part Time'>Part Time</option>
                <option value='Contract'>Contract</option>
            </select>

            {/* Job location */}
            <select onChange={handleChange} name="location" value={jobsCriteria.location}
                className="w-full md:w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md">
                <option value='' disabled hidden>Location</option>
                <option value='Remote'>Remote</option>
                <option value='In-Office'>In-Office</option>
                <option value='Hybrid'>Hybrid</option>

            </select>

            {/* job experience */}
            <select onChange={handleChange} name="experience" value={jobsCriteria.experience}
                className="w-full md:w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md">
                <option value='' disabled hidden>Experience</option>
                <option value="Internship">Internship</option>
                <option value='Fresher'>Fresher</option>
                <option value='Junior Level'>Junior Level</option>
                <option value='Mid Level'>Mid Level</option>
                <option value='Senior Level'>Senior Level</option>
                
            </select>

            {/* Search button */}

            <button onClick={search} className="w-full md:w-64 bg-blue-500 text-white font-bold py-3 rounded-md">Search</button>
        </div>
    )
}

export default SearchBar
