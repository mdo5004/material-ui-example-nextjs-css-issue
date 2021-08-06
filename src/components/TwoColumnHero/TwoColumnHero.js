export default function TwoColumnHero({ children }) {
  return <div>
    {children}
    <style jsx>{`
    @media only screen and (pointer: fine) {
      div {
        display: grid;
        gap: 28px;
        grid-template-columns: 1fr 1fr;
      }
      div > img {
        width: 100%;
      }
    }
    
    @media only screen and (max-width: 1100px) and (pointer: coarse) {
      div {
        width: 100%;
      }
    }

    @media only screen and (max-width: 500px) and (pointer: coarse){
      div {
        width: 100%;
        position: relative;
      }
      div > :global(picture), div > :global(img) {
        width: 100%;
      }
      div > :global(*:first-child) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }
    }
`}</style>
  </div>
}