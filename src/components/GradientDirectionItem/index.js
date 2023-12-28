import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {clickGradientDirectionItem, gradientDirectionDetails, isActive} = props
  const {value, displayText} = gradientDirectionDetails

  const onClickGradientItem = () => {
    clickGradientDirectionItem(value)
  }

  return (
    <ListItem>
      <DirectionButton onClick={onClickGradientItem} isActive={isActive}>
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
