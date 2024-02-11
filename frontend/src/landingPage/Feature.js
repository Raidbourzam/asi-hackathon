import react from 'react'
import FeatureBox from './FeatureBox';
import usthblogo from '../Image/11669042_20943659.jpg'
import a from '../Image/12085891_20944372.jpg'
import frr from '../Image/aled.png'

function Feature(props) {
    return (
        
        
        <div className='features'>
            <div className='a-container'>  
            <FeatureBox image={usthblogo} title='Devenez partenaires'/>
            <FeatureBox image={a} title='Formation continue'/>
            <FeatureBox image={frr} title='Activités culturelles et scientifiques
'/>
            </div>
        </div>
        
        
    )
}
export default Feature;