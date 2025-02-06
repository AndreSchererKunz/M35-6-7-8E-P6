import Button from '../Button'
import { Card, Categories, Title, Rate, Description } from './styles'
import Star from '../../assets/images/estrela.png'

type Props = {
  RestaurantTitle: string
  RestaurantRate: number
  RestaurantDetails: string
  RestaurantPhoto: string
  RestaurantCategories: string[]
  RestaurantToLink: string
}

const Restaurant = ({
  RestaurantTitle,
  RestaurantRate,
  RestaurantDetails,
  RestaurantPhoto,
  RestaurantCategories,
  RestaurantToLink
}: Props) => (
  <Card>
    <img src={RestaurantPhoto} alt="Hioki Sushi" />
    <Categories>
      {RestaurantCategories.map((info) => (
        <Button key={info}>{info}</Button>
      ))}
    </Categories>
    <div className="ContainerTop">
      <Title>{RestaurantTitle}</Title>
      <Rate>
        <h3>{RestaurantRate}</h3>
        <img src={Star} alt="Estrela" />
      </Rate>
    </div>
    <Description>{RestaurantDetails}</Description>
    <Button type="link" to={RestaurantToLink}>
      Saiba mais
    </Button>
  </Card>
)

export default Restaurant
