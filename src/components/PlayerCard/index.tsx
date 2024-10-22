import { ButtonIcon } from '@components/ButtonIcon'
import { Container, Icon, Name, Age } from './styles'

type Props = {
  name: string
  age: number
  onRemove: () => void
}

export function PlayerCard({ name, age, onRemove }: Props) {
  return (
    <Container>
      <Icon name="person" />
      <Name>{name}</Name>
      <Age>{age}</Age>

      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove} />
    </Container>
  )
}
