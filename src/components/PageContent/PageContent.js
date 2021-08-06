export default function PageContent({ children }) {
  return <div>
    {children}
    <style jsx>{`
div {
  position: relative;
}

@media only screen and (min-width: 500px) and (pointer: coarse) {
  div {
    margin: 0 auto;
    width: 100%;
    max-width: 90vw;
  }
}

@media only screen and (min-width: 1000px) and (pointer: fine) {
  margin: 0 auto;
  min-width: 1140px;
  max-width: 1140px;
}

@media only screen and (max-width: 1172px) and (pointer: fine) {
  margin: 0 16px;
}
`}</style>
  </div>
}