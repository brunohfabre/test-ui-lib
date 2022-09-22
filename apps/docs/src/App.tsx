import { Button, Text, Heading } from '@coddee-ui/react'

export function App() {
  return (
    <div>
      <Button onClick={() => console.log('teste')}>test button</Button>

      <Text>texTextt component</Text>
      <Heading>Heading component</Heading>
    </div>
  )
}