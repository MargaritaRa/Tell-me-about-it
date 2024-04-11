import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons/faCircleArrowRight'

function NextBtn(){
    return( 
        <button id="next-btn">
            <FontAwesomeIcon icon={faCircleArrowRight} />
        </button>
    )
}

export default NextBtn