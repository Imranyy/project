
import { Link } from "react-router-dom";
const Home=()=>{ 
    return(
        <div className="app">
          <nav>
            <ul>
              <li><Link to='/report'>Report</Link></li>
              <li><Link to='/log'>Log in</Link></li>
              <li><Link to='/reg'><button>Join Us</button></Link></li>
            </ul>
            
          </nav>
          <div className="row-1">
            <div className="col-1"><h3>Domestic Violence and <br/>Sexual Harassement.</h3>
            <p className="para1">Sexual Abuse and domestic violence is a problem which have been there for long. 
    
    Most victims affected go through 
    a rough time; emotion wise and mentally.
    
    There is a raise of sexual assualts and its has to be stopped.<br/> This platform creates awareness on sexual harassement and gender violence and one may report any cases through this platform.
    
            </p>
            </div>
            <div className="col-2">
              </div>
            </div>
    
            <div className="row-2">
              <h3>How to stop Domestic Violence and  Sexual Harassement?</h3>
              <p>
              The best way of reducing this problem is by reporting it to authority.
    The observer or the victim of a sexual harassement may report to the any law enforcer, for instance a police officer.
    
    Sexual harassement and domestic violence affects both genders , either male or female may be a victim.
    
    There are recent cases where a boy has been raped.
    
    But most of this victims may be afraid of reporting the offender due to threats that the offender  may have given the victim. Mostly this offenders threatens to kill the victim if he/she reports to the law enforcers.
    
    Therefore this platform creates an easier way of reporting this law breakers and action being taken on them. By joining our platform you will be able to report any sexual assualts to your near local  law enforcers
    without being known.
              </p>
            </div>
          
        
          
          <div className="row-3">
             <h2>footer</h2>
          </div>
        </div>
    )
}
export default Home;