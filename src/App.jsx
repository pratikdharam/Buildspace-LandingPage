import { useState } from 'react'
import Header from "./Components/Header";
import SectionHow from "./Components/SectionHow";
import SectionCurious from "./Components/SectionCurious";
import SectionInfrastructure from "./Components/SectionInfrastructure";
import SectionProjects from "./Components/SectionProjects";
import SectionBackstory from "./Components/SectionBackstory";
import SectionEnrollment from "./Components/SectionEnrollment";
import './App.css'

function App() {

  return (
    <div>
    <Header />
    <SectionHow />
    <SectionCurious />
    <SectionInfrastructure />
    <SectionProjects />
    <SectionBackstory />
    <SectionEnrollment />
  </div>
  )
}

export default App
