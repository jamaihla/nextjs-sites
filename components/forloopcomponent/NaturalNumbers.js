export default function NaturalNumbers(props) {
    let numArray = props.numbers;
    const lists = numArray.map((item) => <li key={item}>{item}</li>);

    return (
        <ul className="flex justify-between w-1/2">{lists}</ul>
    ) 
  }