import './Links_Chess.css'
import {MdSportsEsports} from 'react-icons/md';
import {BsFillGearFill} from 'react-icons/bs'
import GitHubCalendar from 'react-github-calendar'

function Links(){

    const linkList1 = [{
        name:"YouTube" ,
        link:"https://youtube.com/"
    },{
        name:"DopeBox" ,
        link:"https://dopebox.to/"
    },{
        name:"Netflix" ,
        link:"https://netflix.com/"
    },{
        name:"9anime" ,
        link:"https://netflix.com/"
    },]

    const linkList2 = [{
        name:"CodeWars" ,
        link:"https://www.codewars.com/dashboard"
    },{
        name:"Dribbble" ,
        link:"https://dribbble.com/shots"
    },{
        name:"GitHub" ,
        link:"https://github.com/redsteadz"
    },{
        name:"DevSensei" ,
        link:"https://redsteadz.github.io/glowing-computing-machine/"
    },]

    let Link1 = linkList1.map((obj)=>{
        return (<li className='link_item'><button className='links' onClick={()=>{window.open(obj.link)}}> {obj.name} </button></li>)
    })

    let Link2 = linkList2.map((obj)=>{
        return (<li className='link_item'><button className='links' onClick={()=>{window.open(obj.link)}}> {obj.name} </button></li>)
    })

    return (
        <div className='link_section'>
            <div className='link_box1'>
                <ul className='link_list'>
                    <span className='icon'><MdSportsEsports size={"3vw"} color='#75a1f1' /></span>
                    {Link1}
                </ul>
            </div>
            <div className='link_box2'>
                <ul className='link_list'>
                    <span className='icon'><BsFillGearFill size={"3vw"} color='#75a1f1'/></span>
                   {Link2}
                </ul>
            </div>
        </div>
    )
}



function BottomContainer(){
    const colourTheme = {
        dark: ['#1d2127' , '#0085e9']};

        // EXPLAIN
    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 6;
      
        return contributions.filter(activity => {
          const date = new Date(activity.date);
          const monthOfDay = date.getMonth();
      
          return (
            date.getFullYear() === currentYear &&
            monthOfDay > currentMonth - shownMonths &&
            monthOfDay <= currentMonth
          );
        });
      };

    return(
        <div className='bottom_container'>
            <Links />
            <GitHubCalendar username='redsteadz' blockSize={24} style={{fontFamily:'Montserrat', margin:'3vh', fontWeight:'600', borderColor:'white'}} theme={colourTheme} transformData={selectLastHalfYear} labels={{totalCount:'{{count}} contributions in the last half year'}} />
        </div>
    )
}
export default BottomContainer;