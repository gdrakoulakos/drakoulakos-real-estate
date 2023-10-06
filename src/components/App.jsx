import React from "react";
import HouseCard from "./HouseCard";
import properties from "../properties"
import Logo from "./Logo"
import MainMenu from "./MainMenu";
import Footer from "./Footer"

function createProperty (property) {
    return (
        <HouseCard 
            id={property.id}
            area={property.area}
            img={property.imgURL}
            phone={property.phone}
            condition={property.condition}
            notes={property.notes}
            price={property.price}
            location={property.location}
        />
    )
}

function App () {

    return (
        <div>
            <header>
                <Logo />
                <MainMenu />
            </header> 
            <div className="cards-alignment">
                {properties.map(createProperty)}
            </div>
            <Footer />
        </div>
    );
}

export default App;