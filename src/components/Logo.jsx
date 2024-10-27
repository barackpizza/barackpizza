import { Link } from 'react-router-dom'

export default function Logo() {
	return (
		<Link to={'/'} className='text-3xl font-semibold'>
			<img
				src='https://ik.imagekit.io/88up9y9qq/barackpizza/pizza-logo.jpg?updatedAt=1730050849744'
				alt='Barack Pizza Logo'
				className='w-fit block size-12 rounded-full'
			/>
		</Link>
	)
}
