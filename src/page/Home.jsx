import "../App.css";

function Home({ userData }) {

    return (
        <div>
            {
                userData.map((elem) => {
                    if (elem.id < 45) return false
                    return < div key={elem.id + elem.title} className="border border-success blok">
                        <img className="img-thumbnail" src={elem.image || "/image/nofoto.png"} alt={elem.title} />
                        <h2 className="h2">{elem.title + elem.id}</h2>
                        <p className="h2">{elem.text}</p>
                    </div>
                })
            }
        </div>
    );
}

export default Home;
