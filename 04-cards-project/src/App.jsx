import React from 'react'

import Card from './components/Card.jsx'
import { EllipsisVertical } from 'lucide-react';


const jobOpenings = [
  {
    brandlogo:
      "https://thumbs.dreamstime.com/b/google-logo-vector-format-white-background-illustration-407571048.jpg",
    nameOfCompany: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India",
  },
  {
    brandlogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHYuv5akOJBQPcjnTk7-eMZnNjEB6cl-ON5w&s",
    nameOfCompany: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Mumbai, India",
  },
  {
    brandlogo:
      "https://img.freepik.com/premium-vector/meta-company-logo_265339-667.jpg?semt=ais_hybrid&w=740&q=80",
    nameOfCompany: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Mumbai, India",
  },
  {
    brandlogo:
      "https://static.vecteezy.com/system/resources/previews/019/136/322/non_2x/amazon-logo-amazon-icon-free-free-vector.jpg",
    nameOfCompany: "Amazon",
    datePosted: "3 weeks ago",
    post: "Backend Engineer",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: "$55/hr",
    location: "Mumbai, India",
  },
  {
    brandlogo:
      "https://i.pinimg.com/736x/9e/a0/1d/9ea01d1a050f773d5f43c0d9362def36.jpg",
    nameOfCompany: "Netflix",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Mumbai, India",
  },
  {
    brandlogo:
      "https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
    nameOfCompany: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Mumbai, India",
  },
  {
    brandlogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUtNIzRpzgCP-LG0xpfuDwA_alyeCv4mUPuw&s",
    nameOfCompany: "IBM",
    datePosted: "6 weeks ago",
    post: "Data Analyst",
    tag: "Part Time",
    tag2: "Junior Level",
    pay: "$35/hr",
    location: "Mumbai, India",
  },
  {
    brandlogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVer_wMBRrUuTJfkLE_pq1nZRrlaHrWVkNUA&s",
    nameOfCompany: "Oracle",
    datePosted: "8 days ago",
    post: "Java Developer",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: "$50/hr",
    location: "Mumbai, India",
  },
  {
    brandlogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtGx05O1Jr9TmMAQm_LZc0KWr7y_LVTb7WaQ&s",
    nameOfCompany: "Intel",
    datePosted: "2 months ago",
    post: "System Software Engineer",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: "$58/hr",
    location: "Mumbai, India",
  },
  {
    brandlogo:
      "https://static.vecteezy.com/system/resources/previews/060/100/954/non_2x/adobe-logo-free-download-adobe-logo-free-png.png",
    nameOfCompany: "Adobe",
    datePosted: "12 days ago",
    post: "UI/UX Engineer",
    tag: "Part Time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Mumbai, India",
  },
];

// console.log(jobOpenings)

const App = () => {
  return (
    <div className="parent">
    {jobOpenings.map(function(elem,idx){
      // console.log(idx)
      return (
        <div key={idx}>
          <Card
            brandlogo={elem.brandlogo}
            company={elem.nameOfCompany}
            datePosted={elem.datePosted}
            post={elem.post}
            tag={elem.tag}
            tag2={elem.tag2}
            pay={elem.pay}
            location={elem.location}
          />
        </div>
      );
    })}
    </div>
  );
}

export default App