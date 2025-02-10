type Props = {
  numbers: number[]
}

const NumberList = ({ numbers }: Props) => {
  return (
    <ul>
      {numbers.map((number) => (
        <li key={number}>{number}</li>
      ))}
    </ul>
  )
}

export default NumberList