import React from 'react';

const genreArray = [  
        "anything your heart desires",
        "Country",
        "Rock",
        "Hip Hop",
        "Rap"
    ]

    const  randArray = genreArray[Math.floor(Math.random() * genreArray.length)]

class Home extends React.Component {


    render() {
        return(
            <div className="todays_topic">
                <p>"Why dont you talk about {randArray}?" </p>
            </div>
        )}
        }
        
export default Home; 