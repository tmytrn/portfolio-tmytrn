import Head from 'next/head'
import Layout from '../../components/layout'
import airbnbStyles from '../../styles/airbnb.module.css'
import Link from 'next/link'

export default function AirbnbJournals() {
    const styles = {
        airbnbStyle: {
            color: "#333333"
        },
        grey: {
            color: "#555555"
        },
    };
    const hero = {
        backgroundImage: "url(/Journals/AirbnbJournals_Hero.png)"
    }
    return (
        <Layout portfolioProject>
            <Head></Head>
            <div style={styles.airbnbStyle} >
                <div
                    className="vh-75 cover bg-center"
                    style={hero}
                ></div>
                <div className=" mw8 center ph4">
                    <div className="w-100" >
                        <div className="fl w-100 w-25-ns mt4 pt1 pr1-l" >
                            <p className="f6 mv0 b" >Date</p>
                            <p className="db lh-copy mv0 f6 measure pb3">April 2020</p>
                            <p className="f6 mv0 b">Timeline</p>
                            <p className="db lh-copy mv0 f6 measure pb3">48 hours</p>
                            <p className="f6 mv0 b">Team</p>
                            <p className="db lh-copy mv0 f6 measure">Angelo Saraceno</p>
                            <p className="db lh-copy mv0 f6 measure">Renaise Kim</p>
                            <p className="db lh-copy mv0 f6 measure pb3">Tommy Tran</p>
                            <p className="f6 mv0 b">Tools</p>
                            <p className="db lh-copy mv0 f6 measure">Adobe XD, Figma</p>
                        </div>
                        <div className="fl w-100 w-75-l pb3">
                            <h1 className="fw6 f3 mt4 lh-title fl w-100 red">Airbnb Journals</h1>
                            <p className="db lh-copy mv0 f6 f5-ns measure">
                                Airbnb Journals was an entry in the Airbnb + College Adobe
                                Creative Jam. It is a unified portal to keep trips organized
                                by listing and curating events that your group has booked to keep
                                everyone on the same page.
                        </p>
                            <br></br><br></br>
                            <p className="db lh-copy mv0 f6 f5-ns measure"> We placed second among hundreds of entries.
                            <a href="https://xd.adobe.com/view/646cc6c0-f4d3-42be-6a0d-ef2c07554647-125d/" className="link">
                                    <span className="b red"> Try the prototype.</span>
                                </a>
                            </p>

                        </div>
                    </div>
                    <div className="fl fr-ns pt3 pb3 w-100 w-75-l bt b--black-05" style={styles.airbnbStyle}>
                        <h1 className="fw6 f4 mt3-l lh-title fl w-100 red ">Challenge</h1>
                        <p className="db lh-copy f5-ns measure">
                            In a mobile app, provide a way to combine photos and/or notes
                            and transform their shared family trips into immersive stories
                            about the culture and destinations they visit. What if that
                            solution combined a traditional pledge with a fun new way to
                            spread the word, visually, through social media?
            </p>
                    </div>
                    <div className="fl fr-ns pt3 pb3 w-100 w-75-l bt b--black-05 " style={styles.airbnbStyle}>
                        <h1 className="fw6 f4 mt3-l lh-title fl w-100 red ">Scope</h1>
                        <p className="db lh-copy mt0 f6 f5-ns measure">
                            A storytelling app may optionally serve families or friends who
                            travel together best by:
            </p>
                        <ul className="fl pl3 measure">
                            <li>
                                <p className="f6 f5-ns">
                                    Giving group members a way to create a single trip or
                                    multiple stories, during or after travel
                </p>
                            </li>
                            <li>
                                <p className="f6 f5-ns">
                                    Letting all family or travel members contribute, no matter
                                    how old they are
                </p>
                            </li>
                            <li>
                                <p className="f6 f5-ns">
                                    Encouraging engagement with a gamified experience
                </p>
                            </li>
                            <li>
                                <p className="f6 f5-ns">
                                    Allowing people to learn, favorite and save stories,
                                    discuss, and safely connect
                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="fl fr-ns pt3 pb3 w-100 w-75-l bt b--black-05" style={styles.airbnbStyle}>
                        <h1 className="fw6 f4 mt3-l lh-title fl w-100 red">Evaluation</h1>
                        <ul className="fl pl3 measure" >
                            <li>
                                <p className="lh-copy f6 f5-ns">
                                    Does the solution address a target audience and their needs?
              </p>
                            </li>
                            <li>
                                <p className="lh-copy f6 f5-ns">
                                    Does the prototype solve the problem in an innovative way?
              </p>
                            </li>
                            <li>
                                <p className="lh-copy f6 f5-ns">
                                    Is the user experience and interface intuitive?
              </p>
                            </li>
                            <li>
                                <p className="lh-copy f6 f5-ns">
                                    Is visual design used in a thoughtful and meaningful way?
              </p>
                            </li>
                        </ul>
                    </div>
                    <div className="fr pt3 pb3 w-100 w-75-l bt b--black-05" style={styles.airbnbStyle}>
                        <h1 className="fw6 f4 mb-ns mt3-l lh-title fl w-100 red">Timeline</h1>
                        <div className="fn fl-ns w-25-ns">
                            <p className=" b f6 f5-ns">Friday</p>
                        </div>
                        <div className="fn fl-ns w-75-ns">
                            <ul className="pl0 list" >
                                <li>
                                    <p className=" f6 f5-ns ">
                                        Research
                </p>
                                </li>
                                <li>
                                    <p className="f6 f5-ns">
                                        Define
                </p>
                                </li>
                                <li>
                                    <p className="f6 f5-ns">
                                        Plan
                </p>
                                </li>
                                <li>
                                    <p className="f6 f5-ns">
                                        Brand Identity
                </p>
                                </li>
                                <li>
                                    <p className="f6 f5-ns">
                                        Journey Map
                </p>
                                </li>
                            </ul>
                        </div>
                        <div className="fn fl-ns w-25-ns">
                            <p className=" b f6 f5-ns">Saturday</p>
                        </div>
                        <div className="fn fl-ns w-75-ns">
                            <ul className="pl0 list" >
                                <li>
                                    <p className="f6 f5-ns">
                                        Low Fidelity Wireframes
                  </p>
                                </li>
                                <li>
                                    <p className="f6 f5-ns">
                                        Refine Design System
                  </p>
                                </li>
                                <li>
                                    <p className="f6 f5-ns">
                                        Integrate Feedback Points
                  </p>
                                </li>
                                <li>
                                    <p className="f6 f5-ns">
                                        High Fidelity Wireframes
                  </p>
                                </li>
                                <li>
                                    <p className="f6 f5-ns">
                                        Prepare for presentation
                  </p>
                                </li>
                            </ul>
                        </div>
                        <div className="fn fl-ns w-25-ns">
                            <p className=" b f6 f5-ns">Sunday</p>
                        </div>
                        <div className="fn fl-ns w-75-ns">
                            <ul className="pl0 list">
                                <li>
                                    <p className="f6 f5-ns">
                                        Submit
                </p>
                                </li>
                                <li>
                                    <p className="f6 f5-ns">
                                        Caffeinate
                </p>
                                </li>
                                <li>
                                    <p className="f6 f5-ns">
                                        Present
                </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="fr pt3 pb3 w-100  w-75-l bt b--black-05" style={styles.airbnbStyle}>
                        <h1 className="fw6 f3 mv3-l lh-title fl w-100 red">How might we build compelling experiences that encourage engagement?</h1>
                        <ul className="fl pl3 pb3">
                            <li>
                                <p className="lh-copy f6 f5-ns">
                                    Sharing travel experiences and contributing is difficult
              </p>
                            </li>
                            <li>
                                <p className="lh-copy f6 f5-ns">
                                    Hosts/potential guests can’t distinguish between 5 star ratings
              </p>
                            </li>
                            <li>
                                <p className="lh-copy f6 f5-ns">
                                    Organizing travel information post and pre experiences
              </p>
                            </li>
                        </ul>
                    </div>
                    <div className="fl pv5 w-100 bt b--black-05" style={styles.airbnbStyle}>
                        <h1 className="fw6 f4 lh-title tc w-100 red">Journey Map</h1>
                        <div className="fl mv3 tc center">
                            <img className="w-100 w-75-l center" src='/Journals/User_Journey.png' alt="airbnb"></img>
                        </div>
                    </div>
                    <div className="fl pv5 w-100 bt b--black-05" style={styles.airbnbStyle}>
                        <div className="fl w-100 w-40-l">
                            <h1 className="fw6 f4 lh-title fl w-100 red">Feature Selection</h1>
                            <ul className="fl pl3">
                                <li className="">
                                    <p className="lh-copy f6 f5-ns b red">
                                        Collaborative album
              </p>
                                </li>
                                <li className="">
                                    <p className="lh-copy f6 f5-ns b red">
                                        Group itinerary+
              </p>
                                </li>
                                <li className="">
                                    <p className="lh-copy f6 f5-ns b red">
                                        Stickers
              </p>
                                </li>
                                <li className="">
                                    <p className="lh-copy f6 f5-ns b red">
                                        Polls on itinerary
              </p>
                                </li>
                                <li className="">
                                    <p className="lh-copy f6 f5-ns b red">
                                        Featured Journals on listings
              </p>
                                </li>
                                <li>
                                    <p className="lh-copy f6 f5-ns">
                                        Group leader can post announcements
              </p>
                                </li>
                                <li>
                                    <p className="lh-copy f6 f5-ns">
                                        AI generated montage videos
              </p>
                                </li>
                                <li>
                                    <p className="lh-copy f6 f5-ns">
                                        Remote Trip
              </p>
                                </li>
                                <li>
                                    <p className="lh-copy f6 f5-ns">
                                        Stories/Posts/Videos
              </p>
                                </li>
                                <li>
                                    <p className="lh-copy f6 f5-ns">
                                        Share Journal with host
              </p>
                                </li>
                                <li>
                                    <p className="lh-copy f6 f5-ns">
                                        Share completed trips/itineraries
              </p>
                                </li>
                                <li>
                                    <p className="lh-copy f6 f5-ns">
                                        Rebook completed trips
              </p>
                                </li>
                            </ul>
                        </div>
                        <div className="fl w-100 w-60-l">
                            <div className="mv3 tc center">
                                <img className="w-100 center" src="/Journals/Effort_Impact.png" alt="airbnb"></img>
                                <p className="lh-copy f6 f5-ns">Effort/Impact Matrix</p>
                            </div>
                        </div>
                    </div>
                    <div className="fr pv5 w-100 bt b--black-05" style={styles.airbnbStyle}>
                        <h1 className="fw6 f4 lh-title fl w-100 tc red">Visual Design Inspiration</h1>
                        <p className="lh-copy mv0 ph5-l f6 f5-ns pb5 tc w-100">
                            We used Airbnb's Online Experiences and Design Language System as inspiration to create a brand new feature that snugly fits into the Airbnb ecosystem.
                        </p>
                        <div className="fn fr-ns mb3 w-100">
                            <div className="fn fl-ns w-third-ns ph4">
                                <p className="b lh-copy f6 f5-ns tc">
                                    Feature Logotypes
              </p>
                                <img className="w-100  pb3" src="/Journals/Luxe.png" alt="airbnb"></img>
                                <img className="w-100 " src="/Journals/Plus.jpg" alt="airbnb"></img>
                            </div>
                            <div className="fn fl-ns w-third-ns ph4">
                                <p className="b lh-copy f6 f5-ns tc">
                                    Current Home Page
              </p>
                                <img className=" w-100 " src="/Journals/Current_Home.png" alt="airbnb"></img>
                            </div>
                            <div className="fn fl-ns w-third-ns ph4">
                                <p className="b lh-copy f6 f5-ns tc">
                                    Online Experiences
              </p>
                                <img className=" w-100 " src="/Journals/Online_Experiences.png" alt="airbnb"></img>
                            </div>
                            <div className="fn fl-ns w-100-ns pt5">
                                <p className="b lh-copy f6 f5-ns tc">
                                    Design Language System (by Airbnb)
              </p>
                                <img className="fl w-100 pb3" src="/Journals/DLS.png" alt="airbnb"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fl w-100 bg-orange">
                    <div className="mw8 center ph4">
                        <div className="fl pv5 w-100 bt b--black-05" style={styles.airbnbStyle}>
                            <div className="ph1 ph4-ns">                            
                                <h1 className="fw6 f4 mb3-ns lh-title tc white">Final Design</h1>
                                <p className="lh-copy mv0 f6 f5-ns pb5 near-white tc">
                                    Journals is a unified portal to keep your trips organized by listing and curating events that your group has booked to keep everyone on the same page. Group members can post photos, stills or ephermeral to share memories to close friends and family. At the end of the trip, journals will help you curate and share those memories to even those who werent physically with you.
                                </p>

                            </div>
                            <div className="fl mb5 w-100">
                                <div className="fl-ns w-80 center w-third-ns ph1 ph4-ns pb3">
                                    <p className="b lh-copy f6 f5-ns tc near-white">
                                        Journals Page
                            </p>
                                    <div className={airbnbStyles.iphoneWrapper + " w-100  center"}>
                                        <img className={airbnbStyles.iphone} src="/Journals/Journals_Home.png" alt="airbnb"></img>
                                    </div>
                                </div>
                                <div className="fl-ns w-80 center w-third-ns ph1 ph4-ns">
                                    <p className="b lh-copy f6 f5-ns tc near-white">
                                        Journal Itinerary
                            </p>
                                    <div className={airbnbStyles.iphoneWrapper + " w-100  center"}>
                                        <img className={airbnbStyles.iphone} src="/Journals/Journal_1.png" alt="airbnb"></img>
                                    </div>
                                    <p className=" lh-copy f6 near-white tc">
                                    (try scrolling on each screen)
                            </p>
                                </div>
                                <div className="fl-ns w-80 center w-third-ns ph1 ph4-ns">
                                    <p className="b lh-copy f6 f5-ns tc near-white">
                                        Journals Mementos
                            </p>
                                    <div className={airbnbStyles.iphoneWrapper + " w-100  center"}>
                                        <img className={airbnbStyles.iphone} src="/Journals/Journal_Memento.png" alt="airbnb"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fl w-100 ph5 ph0-ns mv3 mv6-ns center">
                        <div className="fl w-100 w-third-ns ph1 ph4-ns pv3 ">
                            <div className="w-100 w-80-ns center-ns">
                                <video autoPlay loop muted className="w-100">
                                    <source src="/Journals/TeamAdobo_AirbnbCreativeJam_Submission.mp4" type="video/mp4" alt="airbnb"></source>
                                </video>
                            </div>
                        </div>
                        <div className="fl-ns w-100 w-two-thirds-ns ph1 ph4-ns pb3 mt6-ns">
                            <p className="b lh-copy f6 f5-ns near-white ">
                                Journals Features
                            </p>
                            <p className="lh-copy f6 f5-ns measure near-white"> Find new trip ideas through the Journals homepage.
                            Each Journal shows rich details about each trip
                            like locations that guests went to, photos they took, and the Airbnb they stayed at.
                            This adds value to previous trips that groups make, and helps soon-to-be guests choose where to make their next stay.
                                </p>
                        </div> 
                        </div>
                        <div className="fl w-100 ph5 ph0-ns mv3 mv6-ns center"> 
                        <div className="fl-ns w-100 w-two-thirds-ns ph1 ph4-ns pb3 tr-ns mt6-ns">
                            <p className="b lh-copy f6 f5-ns near-white ">
                                Adding Mementos
                            </p>
                            <p className="fl fr-ns lh-copy f6 f5-ns measure near-white"> Photos, videos, and text can be added in the mementos tab.
                            This serves as a central hub of media for all group members. 
                            Collect memorabilia like souvenirs, stickers, and stamps to further personalize your Journals. 
                                
                                </p>
                        </div> 
                        
                        <div className="fl w-100 w-third-ns ph1 ph4-ns pv3 ">
                            <div className="w-100 w-80-ns center-ns">
                            <video autoPlay loop muted className="w-100 ">
                                <source src="/Journals/TeamAdobo_AirbnbCreativeJam_Add_To_Journal.mp4" type="video/mp4" alt="airbnb"></source>
                            </video>
                            </div>
                        </div>      
                        </div>    
                        
                <div className="fl w-100 mv5" >
                    <h1 className="f4 f3-ns">
                        <a href="https://xd.adobe.com/view/646cc6c0-f4d3-42be-6a0d-ef2c07554647-125d/" className="link near-white underline">
                            Try the Adobe XD prototype&#8599;
                        </a>
                    </h1>
                    <Link href="/portfolio">
                    <a className="near-white f5 link underline"> ← Go back Home.</a>
                    </Link>
                </div>           
                    </div>
                </div>
            </div>

        </Layout>

    )
}
