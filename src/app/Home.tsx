import Input from 'components/molecules/Input'

export default function Home() {
  return (
    <main>
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
