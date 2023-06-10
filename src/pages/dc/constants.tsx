import ReactDomServer from 'react-dom/server';
import { IPersonInformation } from "../../@types/signature";

const FIXED_PART = (<>
  <div>
    <a href="http://www.diversecity.org.uk/">
      <img
        src="https://diversecity.org.uk/wp-content/uploads/2021/06/Diverse-City-Horizontal-e1681854172882.png"
        alt="Diverse City logo written in a bold font in purple to teal-coloured gradient." />
    </a>
  </div>
  <div>
    <a href="http://www.extraordinarybodies.org.uk">
      <img
        src="https://diversecity.org.uk/wp-content/uploads/2023/04/EB-Teal-Logo-150px.png"
        alt="Extraordinary Bodies logo: black rounded font and soft red circle on the left." />
    </a>
  </div>
  <div>
    <p style={{ fontSize: 12 }}>
      We run&nbsp;
      <a href="http://www.extraordinarybodies.org.uk">
        Extraordinary Bodies
      </a>,
      the UK's leading integrated circus company, in collaboration with&nbsp;
      <a href="https://www.cirquebijou.co.uk/">Cirque Bijou</a>.
    </p>
  </div>
  <p style={{
    color: "#00a29e",
    fontSize: 13,
    textDecoration: "underline",
    fontFamily: "arial black",
  }}>
    <a style={{ color: "#00a29e" }} href="https://www.instagram.com/diverse_city">
      Instagram
    </a> |&nbsp;
    <a style={{ color: "#00a29e" }} href="https://twitter.com/Diversecity1">
      Twitter
    </a> |&nbsp;
    <a style={{ color: "#00a29e" }} href="https://www.facebook.com/Diversecity1">
      Facebook
    </a> |&nbsp;
    <a style={{ color: "#00a29e" }} href="https://www.youtube.com/channel/UCyu13TjBToC_Or3sQsN0GAw">
      Youtube
    </a> |&nbsp;
    <a style={{ color: "#00a29e" }} href="http://www.diversecity.org.uk/newsletter/">
      Newsletter
    </a> |&nbsp;
    <a style={{ color: "#00a29e" }} href="https://platform.nationalfundingscheme.org/EXTR003?charity=EXTR003#.Xzv2oy2ZMWo">
      Donate
    </a>
  </p>

  <p style={{ fontFamily: "arial", fontSize: "10px" }}>Charity Number: 1176855</p>

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