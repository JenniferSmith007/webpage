import picicon from '../images/picicon.svg'

export const About = ()=> {
    return(
        <div className='about'>
            <h2 className='about_header'>FRONTEND DEVELOPER</h2>
            <p className='loc'>Located, New York City</p>
            <img className='pic' src={picicon} alt="pic"/>
        </div>
    )
}