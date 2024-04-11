import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'

function PreviousBtn(){
    return(
        
        <button id="prev-btn">
            <FontAwesomeIcon icon={faCircleArrowLeft} />
        </button>
        
    )
}

export default PreviousBtn