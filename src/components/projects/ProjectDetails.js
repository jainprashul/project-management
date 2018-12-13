import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
  return (
    <div className='container section project-details'>
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Project Details - {id}</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat soluta unde voluptatum excepturi deleniti explicabo cum neque ex, reiciendis, pariatur nam eos modi vitae quam error beatae sint tenetur expedita.
                </p>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted By the XpJain</div>
                    <div>23 December , 4am</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails
