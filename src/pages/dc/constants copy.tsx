import ReactDomServer from 'react-dom/server';
import { IPersonInformation } from "../../@types/signature";

const FIXED_PART = (<>
  
  <p>
  <table>
    <tr>
      <td style={{width: "40%"}}>
        <p>
          <a href="http://www.diversecity.org.uk/">
            <img style={{width: 150}}
              src="https://diversecity.org.uk/wp-content/uploads/2021/06/Diverse-City-Horizontal.png"
              alt="Diverse City logo written in a bold font in purple to teal-coloured gradient." />
          </a>
        </p>
        <p>
          <a href="http://www.extraordinarybodies.org.uk">
            <img style={{float: "left", padding: "0px, 10px 0px 0px", width:"150px"}}
              src="https://www.extraordinarybodies.org.uk/wp-content/uploads/2022/03/EB-Teal-Logo.png"
              alt="Extraordinary Bodies logo: black rounded font and soft red circle on the left." />
          </a>
        </p>
      </td>
      <td vertical-align="top">
        <div>
        <p style={{fontFamily: "arial black", fontSize: 12}}>
          We run Extraordinary Bodies,
        </p>
        <p>the UK's leading integrated circus company,
        </p>
        <p>in
          collaboration with Cirque Bijou.
        </p>
        </div>
      </td>
    </tr>
  </table>
  </p>
  <p style = {{
  color: "#00a29e",
  fontSize: 13,
  textDecoration: "underline",
  fontFamily: "arial black",}}>
    <a style={{color: "#00a29e"}} href="https://www.instagram.com/diverse_city">
      Instagram
    </a> |&nbsp;
    <a style={{color: "#00a29e"}} href="https://twitter.com/Diversecity1">
      Twitter
    </a> |&nbsp;
    <a style={{color: "#00a29e"}} href="https://www.facebook.com/Diversecity1">
      Facebook
    </a> |&nbsp;
    <a style={{color: "#00a29e"}} href="https://www.youtube.com/channel/UCyu13TjBToC_Or3sQsN0GAw">
      Youtube
    </a> |&nbsp;
    <a style={{color: "#00a29e"}} href="http://www.diversecity.org.uk/newsletter/">
      Newsletter
    </a> |&nbsp;
    <a style={{color: "#00a29e"}} href="https://platform.nationalfundingscheme.org/EXTR003?charity=EXTR003#.Xzv2oy2ZMWo">
      Donate
    </a>
  </p>
  <p style={{
      fontFamily: "arial black",
      color: "#312e5d",
      fontSize: 12,}}>
    Coming up:
    <i> Delicate tour </i>
    , Autumn 2022.
    <a href="https://www.extraordinarybodies.org.uk/our-work/delicate/">
      Click here
    </a>
    to find out more.
  </p>
  <p style={{fontFamily: "arial", fontSize: "10px"}}>Charity Number: 1176855</p>

  </>
)

export const SIGNATURE = (state: IPersonInformation) => {
  return (<>
    <p>{state ? state.fullName : ''}</p>
    <p>{state ? state.role : ''}</p>
    {FIXED_PART}
  </>)
}

export const SIGNATURE_HTML = (state: IPersonInformation) => {
  return ReactDomServer.renderToStaticMarkup(<>
    <p>{state ? state.fullName : ''}</p>
    <p>{state ? state.role : ''}</p>
    {FIXED_PART}</>)
}