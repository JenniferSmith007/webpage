import emailicon from '../images/emailicon.svg'
import githubicon from '../images/githubicon.svg'
import linkedinicon from '../images/linkedinicon.svg'


export const Contacts = () => {
    return(
        <div className="icons">
            <img className="email" src={emailicon} alt='email' />
            <img className="github" src={githubicon} alt='github'/>
            <img className="linked" src={linkedinicon} alt='linkedin'/>
        </div>
    )
}