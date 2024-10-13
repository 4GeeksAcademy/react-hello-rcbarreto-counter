import React from "react";
import { matchRoutes } from "react-router";

const Digit = (props) => {

	return (

	<div className="card text-bg-dark mb-3 m-1">
	
			<div className="card-body">
		    	<h5 className="card-title" style={{ fontSize: "40px" }} >{props.digito}</h5>
	   		</div>
   	</div>
);
};

const SecondsCounter = (props) => {
	return (
		
	<div className = "d-flex">

		<div className="card text-bg-dark mb-3 m-1">
	
			<div className="card-body">
				<i className="fa-solid fa-clock" style={{ fontSize: "40px" }} ></i>
			</div>
		</div>

		<Digit digito = {Math.floor(props.digito / 100000 %10)}/>
		<Digit digito = {Math.floor(props.digito / 10000 %10)}/>
		<Digit digito = {Math.floor(props.digito / 1000 %10)}/>
		<Digit digito = {Math.floor(props.digito / 100 %10)}/>
		<Digit digito = {Math.floor(props.digito / 10 %10)}/>
		<Digit digito = {props.digito %10}/>

	</div>
	
	
			
	);
};

export default SecondsCounter;