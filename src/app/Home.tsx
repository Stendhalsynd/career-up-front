import Input from 'components/atoms/Input/index.tsx'
import Text from 'components/atoms/Text/index.tsx'

export default function Home() {
  return (
    <main>
      <Text variant={'small'} color="danger">
        test
      </Text>
      <Input
        name="email"
        type="text"
        placeholder="이메일"
        hasBorder
        hasDarkBackground
      />
    </main>
  )
}
