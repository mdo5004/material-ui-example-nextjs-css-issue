export default function OneColumnHero({ children }) {
  return <div>
    {children}
    <style jsx>{`
      div {
        padding: 3rem 0;
      }
      div p {
        max-width: 530px;
        margin: 1rem auto;
      }
    `}</style>
  </div>
}