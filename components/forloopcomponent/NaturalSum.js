export default function NaturalSum(props) {
    let numArray = props.numbers;
    let sum = 0;

    for (var i = 0; i <= numArray.length; i++) {
        sum += i;
    }

    const lists = numArray.map((item) => <li key={item}>{item}</li>);

    return (
        <>
        <p className="mb-2">The first 10 natural numbers are:</p>
        <nav>
            <ul className="flex justify-evenly">{lists}</ul>
        </nav>
        <p className="mt-2">The sum of these numbers is: {sum}</p>
        </>
    ) 
  }