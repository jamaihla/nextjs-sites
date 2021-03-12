export default function NumberSum(props) {
    let sizeOfArray = props.size;
    let numArray = [];
    let sum = 0;

    for (var i = 1; i <= sizeOfArray; i++) {
        numArray.push(i);
        sum += i;
    }

    const lists = numArray.map((item) => <li key={item}>{item}</li>);

    return (
        <>
        <p className="mb-2">The first {sizeOfArray} natural numbers are:</p>
        <nav>
            <ul className="flex justify-evenly">{lists}</ul>
        </nav>
        <p className="mt-2">The sum of the natural numbers up to {sizeOfArray} terms is: {sum}</p>
        </>
    ) 
  }