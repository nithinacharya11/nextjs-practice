
const About = ({catFact}) => {
  return (
    <div className="w-fit mx-auto">
      <h1 className="text-center font-semibold m-1">About page</h1>
      <p><span className="font-semibold"> Here's a fun cat fact:</span> {catFact}</p>
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
