// import { useState,useEffect } from "react"
// import { generateDataOptions,months,years } from "../../utils/DataRender"
// import Navigation from "../../components/Navigation/Navigation";
// import "./FilterBox.css"


// const FilterBox = ({getMonthYear})=>{
//     const [selectedMonth,setSelectedMonth]=useState("January");
//     const [selectedYear,setSelectedYear]=useState(2023);

//     const monthToRender =()=>generateDataOptions(months)

//     const yearsToRender =()=>generateDataOptions(years)

//     const handleMonthChange=(e)=>{
//         setSelectedMonth(e.target.value)
//     }  
//     const handleYearChange=(e)=>{
//         setSelectedYear(Number(e.target.value))
//     } 
//     useEffect(()=>{
//         const updateParent=()=>{
//             getMonthYear(selectedMonth,selectedYear)
//         }
//         updateParent()
//     },[selectedMonth,selectedYear,getMonthYear])
//     return(
//         <div>
//             <form className="filter-card">
//                 <div className="wrapper">
//                 <div className="date">
//                     <label htmlFor="month">Month : </label>
//                         <select
//                         value={selectedMonth}
//                         onChange={handleMonthChange}
//                         >
//                         {monthToRender()}
//                         </select>
//                 </div>
//                 <div className="date">
//                     <label htmlFor="year">Year : </label>
//                     <select
//                     value={selectedYear}
//                     onChange={handleYearChange}
//                     >
//                         {yearsToRender()}
//                     </select>
//                 </div>
//                 </div>
//             </form>
//         </div>
//     )
// }
// export default FilterBox;



import { useState, useEffect } from "react";
import { generateDataOptions, months, years } from "../../utils/DataRender";
import "./FilterBox.css";

const FilterBox = ({ getMonthYear }) => {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedYear, setSelectedYear] = useState(2023);

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(Number(e.target.value));
  };

  useEffect(() => {
    getMonthYear(selectedMonth, selectedYear);
  }, [selectedMonth, selectedYear, getMonthYear]);

  return (
    <div className="filter-card">
      <form>
        <div className="wrapper">
          {/* Month Selection */}
          <div className="date">
            <label htmlFor="month">Month:</label>
            <select value={selectedMonth} onChange={handleMonthChange}>
              {generateDataOptions(months)}
            </select>
          </div>

          {/* Year Selection */}
          <div className="date">
            <label htmlFor="year">Year:</label>
            <select value={selectedYear} onChange={handleYearChange}>
              {generateDataOptions(years)}
            </select>
          </div>

          {/* Optional Submit Button */}
          <button type="button" onClick={() => getMonthYear(selectedMonth, selectedYear)}>
            Apply Filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterBox;
