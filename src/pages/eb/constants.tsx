import ReactDomServer from 'react-dom/server';
import { IPersonInformation } from "../../@types/signature";

const FIXED_PART = (<>
  <a href="https://www.extraordinarybodies.org.uk/">
    <img alt="letters EB are interlinked forming the Extraordinary Bodies logo" src="https://diversecity.org.uk/wp-content/uploads/2023/04/EB-Teal-Logo-150px.png" />
  </a>
  <p color="#000000">Joyous, radical and bold.</p>
  <p>Get in touch for <strong>support, play, connection and advice.</strong></p>
  <p>
  </p>
  <p>
    Extraordinary Bodies is the collaboration between&nbsp;
    <a color="#12B3AC" href="http://diversecity.org.uk">Diverse City</a>&nbsp;
    and&nbsp;
    <a color="#12B3AC" href="http://cirquebijou.com">Cirque Bijou</a>.
  </p>
  <p>
    <a href="https://twitter.com/ex_bodies">Twitter</a>&nbsp;
    |&nbsp;
    <a href="https://www.instagram.com/extraordinary_bodies/">Instagram</a>&nbsp;
    |&nbsp;
    <a href="https://www.facebook.com/ExtraordinaryBodies">Facebook</a>&nbsp;
    |&nbsp;
    <a href="https://www.extraordinarybodies.org.uk/newsletter-signup/">Mailing List</a>
  </p>
  <p style={{color: "#094fd1", fontSize: 14}}>
    Now on tour: <i>Waldo's Circus of Magic and Terror</i>. <a style={{color: "#094fd1"}}href="https://www.extraordinarybodies.org.uk/our-work/waldos-circus-of-magic-terror/">Click here</a> to find out more.
  </p>
  <a href="https://www.extraordinarybodies.org.uk/our-work/waldos-circus-of-magic-terror/">
    <img alt="Two performers on stage. The performer on the left is wearing a brown vest and white T-shirt underneath. They look towards the performer on the right, that is mid-jump, wearing a white dress and looking hopefull towards infinity. Behind them we can see rays of sun coming from the top and stars on a black background." src="https://diversecity.org.uk/wp-content/uploads/2023/04/eb_banner_700px-e1681819640702.png" /></a>
</>
)

export const SIGNATURE = (state: IPersonInformation) => {
  return (<><div>
    <div style={{ fontSize: 13 }}>
    {state ? state.fullName : ''}
    <br />
    {state ? state.role : ''}
    </div>
    <br/>
    <div style={{fontSize: 10}}>
      {FIXED_PART}
    </div>
  </div></>)
}

export const SIGNATURE_HTML = (state: IPersonInformation) => {
  return ReactDomServer.renderToStaticMarkup(<><div style={{ fontSize: 13 }}>
    {state ? state.fullName : ''}
    <br />
    {state ? state.role : ''}
    {FIXED_PART}</div></>)
}