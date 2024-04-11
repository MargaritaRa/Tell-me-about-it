import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons/faCircleArrowRight'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import (faCircleArrowRight)

function NextBtn(){
    return( 
        <button id="next-btn" class="book">
            <FontAwesomeIcon icon={faCircleArrowRight} />
        </button>
    )
}

export default NextBtn