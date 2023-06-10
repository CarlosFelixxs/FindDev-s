
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css'

type RatingTypes = {
  rating: number;
}

export function RateComponent({rating}: RatingTypes) {

  const Star = <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />

  const starStyles = {
    itemShapes: Star,
    itemStrokeWidth: 2,
    activeFillColor: '#9747ff',
    activeStrokeColor: '#9747ff',
    inactiveFillColor: '#121214',
    inactiveStrokeColor: '#9747ff'
  }

  return (
    <>
      <Rating
        style={{ maxWidth: 250, maxHeight: 200, marginRight: 30 }}
        value={rating}
        itemStyles={starStyles}
        readOnly={true}
      />
    </>
  )
} 