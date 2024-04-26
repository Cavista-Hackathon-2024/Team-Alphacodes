
export default function Scanner({imagePath}) {
  return (
    <section className="take-picture">
        <img className="img-display" src={imagePath} alt="your image" />
    </section>
  )
}
