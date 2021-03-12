export default function SumTen(props) {
    let numArray = props.numbers;
    // let sum = 0;

    // for (var i = 0; i <= numArray.length; i++) {
    //     sum += i;
    // }

    const lists = numArray.map((item) => <li key={item}>{item}</li>);

    return (
        <>
        <nav>
            <ul className="flex justify-evenly">{lists}</ul>
        </nav>
        </>
    ) 
  }