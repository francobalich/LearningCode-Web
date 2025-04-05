
export const BasicTypes = () => {

  const name: string = 'Franco';
  const age: number = 26;
  const isActive: boolean = true;

  const powers: string[] = ['React', 'TypeScript', 'Javascript', 'NodeJS'];

  powers.push('NextJS');



  return (
    <>
    <h3>Tipos Básicos</h3>
    {name} - {age} - {isActive ? 'Activo' : 'Inactivo'} 
    <br />
    {powers.join(', ')}
    </>
  )
}
