export default function Teaser({ blok }) {
    console.log("anything?", blok)
    return (
        <section className="w-full bg-red">
            <h1>{blok?.headline}</h1>
            <p>{blok?.desc}</p>
        </section>
    );
}