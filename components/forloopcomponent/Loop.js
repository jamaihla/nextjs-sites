export default function Loop(props) {
    let parentArray = props.arr;
    const lists = parentArray.map((item) => <li key={item}>{item}</li>);
    
    return <ul>{lists}</ul>;
  }