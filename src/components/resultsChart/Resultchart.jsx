
import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
const resultData = [
  {
    "student_id": 1,
    "name": "Alice",
    "physics": 85,
    "chemistry": 78,
    "math": 92
  },
  {
    "student_id": 2,
    "name": "Bob",
    "physics": 76,
    "chemistry": 82,
    "math": 88
  },
  {
    "student_id": 3,
    "name": "Charlie",
    "physics": 90,
    "chemistry": 91,
    "math": 87
  },
  {
    "student_id": 4,
    "name": "David",
    "physics": 68,
    "chemistry": 74,
    "math": 80
  },
  {
    "student_id": 5,
    "name": "Emma",
    "physics": 95,
    "chemistry": 89,
    "math": 96
  },
  {
    "student_id": 6,
    "name": "Frank",
    "physics": 72,
    "chemistry": 77,
    "math": 70
  },
  {
    "student_id": 7,
    "name": "Grace",
    "physics": 91,
    "chemistry": 94,
    "math": 90
  },
  {
    "student_id": 8,
    "name": "Hank",
    "physics": 70,
    "chemistry": 72,
    "math": 75
  },
  {
    "student_id": 9,
    "name": "Ivy",
    "physics": 88,
    "chemistry": 86,
    "math": 91
  },
  {
    "student_id": 10,
    "name": "Jack",
    "physics": 79,
    "chemistry": 81,
    "math": 84
  }
];
const Resultchart = () => {
    return (
        <div>
           <LineChart width={500} height={500}
           data={resultData}>
            <YAxis></YAxis>
            <XAxis dataKey="name"></XAxis>
           <Line dataKey="math"></Line>
           <Line dataKey={'chemistry'} stroke='red'></Line>
            
           </LineChart>
         

         
            
        </div>
    );
};

export default Resultchart;