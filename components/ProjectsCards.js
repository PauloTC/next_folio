import ProjectCard from "./ProjectCard"
import Grid from '@mui/material/Grid';
import { useEffect } from "react"

export default function ProjectsCards() {


  const data = [
    {
      "name" : "Unete a Belcorp",
      "image" : "/images/uneteabelcorp.png"
    },
    {
      "name" : "Somos Belcorp",
      "image" : "/images/somosbelcorp.png"
    },
    {
      "name" : "Datathon Belcorp",
      "image" : "/images/datathon.png"
    },
    {
      "name" : "Britanico",
      "image" : "/images/britanico.png"
    },
    {
      "name" : "Ladrillos Piramide",
      "image" : "/images/ladrillos.png"
    },
    {
      "name" : "Mapfre Finisterre",
      "image" : "/images/finesterre.png"
    },
    {
      "name" : "Universidad Wiener",
      "image" : "/images/uwiener.png"
    },
    {
      "name" : "MsInmobiliaria",
      "image" : "/images/msinmobiliaria.png"
    },
    {
      "name" : "Steelser",
      "image" : "/images/steelser.png"
    },
    {
      "name" : "Edicion y Color",
      "image" : "/images/edicionycolor.png"
    },
    {
      "name" : "Tecnifajas",
      "image" : "/images/tecnifajas.png"
    },
    {
      "name" : "Barqueros",
      "image" : "/images/barqueros.png"
    },
    {
      "name" : "Ahsecoperu",
      "image" : "/images/ahsecoperu.png"
    },
    {
      "name" : "Agustin Merino",
      "image" : "/images/agustinmerino.png"
    },
    {
      "name" : "Tec Academy",
      "image" : "/images/tec-academy.png"
    },
  ]

  return (
    <Grid paddingX={3} my={3} container spacing={2}>
      {
        data.map( (item, index) => (
          <Grid marginBottom={1} key={index} item xs={4}>
            <ProjectCard data={item} />
          </Grid>
        ))
      }
      {/* <Grid item xs={3}>
        <ProjectCard />
      </Grid> */}
    </Grid>
  )
}
