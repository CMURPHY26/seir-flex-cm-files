const students = [
    "Tara",
    "Jake",
    "Chris S",
    "Scott",
    "Dan",
    "Axel",
    "Heather"
  ]
  
  const prefixes = [
    "DJ", "MC", "Snoop"
  ]
  
  students.forEach(
    (student)=>{
      let prefix = prefixes[Math.floor(Math.random() * prefixes.length)]
      console.log(`${prefix} ${student}`)
    }
  )
  
  // Math.random() * 3
  // Math.ceil(5.11936)
  
  // console.log(`DJ MC ${students[0]}`)