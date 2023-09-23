// rrd
import { useRouteError } from "react-router-dom"

function ErrorElement() {
    const error = useRouteError()
    console.log(error);
  return (
    <div>
        <h4 className='font-bold text-4xl'>There was an error...</h4>
    </div>
  )
}

export default ErrorElement