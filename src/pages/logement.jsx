import React from "react";
import Collaps from "../components/collaps";
import Footer from "../components/footer";
import Header from "../components/header";
import Appart from "../components/logement";
import Slideshow from "../components/slideshow";
import data from "../data.json";

const Logement = () => {
    return <div>
                <Header/>
                <div>
                    {data.map(item =>(
                        <div>
                            <Slideshow
                            pictures={item.pictures}/>
                            <Appart
                            key={item.id}
                            title={item.title}
                            name={item.host.name}
                            picture={item.host.picture}
                            location={item.location}
                            tag={item.tags}
                            />
                            <Collaps
                            title={'Description'}
                            content={item.description}/>
                            <Collaps
                            title={'Equipements'}
                            content={item.equipments}/>
                        </div>

                    ))}
                </div>
                <Footer/>
            </div>
}

export default Logement;