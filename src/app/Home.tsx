import Text from 'components/atoms/Text/index.tsx'
import Input from 'components/molecules/Input'

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
