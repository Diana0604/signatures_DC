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