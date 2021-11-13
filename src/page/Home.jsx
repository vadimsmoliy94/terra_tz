import "../App.css";

function Home({ userData }) {

    return (
        <div className="list">
            {
                userData.map((elem) => {
                    return < div key={elem.id + elem.title} className="border border-success blok">
                        <img className="img-thumbnail" src={elem.image || "/image/nofoto.png"} alt={elem.title} />
                        <h2 className="h2">{elem.title + elem.id}</h2>
                        <p className="h2">{elem.text}</p>
                        <a href={elem.url}> <button className="btn btn-primary me-md-2 sourse-btn" type="button" >Sourse</button></a>
                    </div>
                })
            }
        </div>
    );
}

export default Home;
