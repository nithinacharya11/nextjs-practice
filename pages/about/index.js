
const About = ({catFact}) => {
  return (
    <div>
      <h1>About page</h1>
      <p>{catFact}</p>
    </div>
  )
}

export async function getStaticProps(){
  const result = await fetch('https://catfact.ninja/fact');
  const data = await result.json()

  return {
    props: {
      catFact: data.fact
    }
  }
}

export default About
