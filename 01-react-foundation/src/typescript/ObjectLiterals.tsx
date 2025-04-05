interface Person {
  firstName: string,
  lastName: string,
  age: number,
  address: {
    country: string,
    houseNo: number
  }
  isAlive?: boolean
}
export const ObjectLiterals = () => {
  const person: Person = {
    firstName: 'Franco',
    lastName: 'Balich',
    age: 26,
    address: {
      country: 'Argentina',
      houseNo: 615
    }
  }
  return (
    <>
      <h3>ObjectLiterals</h3>
      <pre>
        {JSON.stringify(person, null, 2)}
      </pre>
    </>
  )
}
