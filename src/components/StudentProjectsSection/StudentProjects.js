import React, { Component } from 'react';

//component/s
import StudentProjectCard from './StudentProjectCard';
import { DownButton } from '../buttons/DownButton';

//import data
import { PROJECTS } from '../../data/projects';

const StudentProjects = props => {
	return (
		<div className="student-projects-section" ref={props.getRef} id="student-projects">
			<div className="student-projects-heading">
				<h2 className="student-projets__title">Student Short Films</h2>
				<p className="student-projects-heading__para">
					Each year <span className="reel-start--blue">Reel Start</span> students create a short film about a
					social issue that’s especially meaningful to them. They work with professional writers to turn their
					ideas into scripts, and their scripts into movies that address issues important to them and their
					community.
				</p>
			</div>
			{/* will have an onclick to make bigger and video plays */}
			<div className="student-projects-videos">
				{PROJECTS.map(project => {
					return <StudentProjectCard key={project.id} project={project} />;
				})}
			</div>
			<DownButton color={'down__button--blue'} click={props.click} />
		</div>
	);
};

export default StudentProjects;
