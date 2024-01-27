import React, { useEffect } from 'react';
import './Skills.css';
const Skills = () => {
  useEffect(() => {
    
    const script = document.createElement('script');
    script.src = 'https://canvasjs.com/assets/script/canvasjs.min.js';
    script.async = true;

    script.onload = () => {
      const chart = new window.CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "dark1",
        title: {
          text: "Skills"
        },
        axisY: {
          title: "Growth Rate (in %)",
          suffix: "%"
        },
        axisX: {
          title: ""
        },
        data: [{
          type: "column",
          yValueFormatString: "#,##0.0#\"%\"",
          dataPoints: [
            { label: "HTML", y: 9.1 },	
            { label: "CSS", y: 8.70 },	
            { label: "JavaScript", y: 8.30 },
            { label: "React Js", y: 8.50 },	
            { label: "NodeJs", y: 8.30 },
            { label: "PHP", y: 8.80 },
            { label: "Wordpress", y: 8.60 },
            { label: "MongoDb", y: 8.60 },
            { label: "mySQL", y: 8.60 },
            { label: "Flutter Flow", y: 6.60 }
          ]
        }]
      });

      chart.render();
    };

    document.body.appendChild(script);

   
    return () => {
      document.body.removeChild(script);
    };
  }, []); 

  return (
    <div id='skills'>
      <div id="chartContainer" ></div>
    </div>
  );
};

export default Skills;
