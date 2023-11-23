function Hello() {

  let myName = "shubham";
  let number = 456;
  let fullName = () => {
    return 'Shubham verma';
  }

  return <h3>
    Hello this is the future speaking. I am your master {myName} and my full name is {fullName()} 
    MessageNo: {number} I am your master {fullName()}

  </h3>
} 

export default Hello;