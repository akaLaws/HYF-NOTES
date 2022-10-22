// -------------------------------------------------------------------------
//                        DISCLAMIMER
// for any real world application examples, that actually works: 
// see the examples from the React2 lesson in the Class slack channel
// The purpose of these examples are purely meant for instructional purpose,
// providing a context for understanding by explaining the code directly. 
//                   (pun totally intended!!)

// * "KISS" = Keep It Simple Stupid..
// -------------------------------------------------------------------------

// Note that I called my context component "ContextData" as to suggest tha possibility to have multiple context for different categories of global data
// HOWEVER - it would probaly be more in the modular spirit to have a single file per context making a "context" folder like you have "hook" and "components" folder as well
// - making it more readable
// also consider if you should have the Consumer hooks in seperate files under the "hooks" folder as well
// Though some might prefer this as best practice some would prably argue *"KISS" to keep the context in a single type file


// Importing state hook and the hook for the specific context collection we want to use in this case my level progress  /  Serving the dish...
import { useState } from "react";
import { useLevel } from "./ContextData";

// My component function for tracking my level of understanding this concept - we are getting there  /  The table...
const TrackLevel = () => {

    // Extracting the properties/methods I need from my context - making sure I'm not bloating my code with those I DON'T need 
    const {myLevel, levelUp, almostThere} = useLevel();

    // Declaring a state for holding the value of my input field
    const [progress, setProgress] = useState();

    // The onClick function implementing my context properties/methods   /  The fork & knife...
    const handleClick = (event) => {
        event.preventDefault();

        // If I understand 100% or more of the concept 
        // Then level up 
        // Else output my progress
        progress >= 100 ? levelUp(true) : almostThere(progress);

        // Outputs my level saved in the context - note that this is not updated to the new level if leveled up
        // This is becaouse of render cycle, you need a new cycle to get the updated value - this is a common bug when learning react in my experience
        // You can always put it within the if/else with a myLevel++ on level up to get around this - so output a local/laxical change while setting the global change :P
        console.log(`Your current level is: ${myLevel}`);
    }

    return (  
        <section>
            <label>How much do you understand of useContext in percent?</label>

            {/* The input field of how much I understand of the Context Concept - saving the input on change witin the progress state */}
            <input 
                type='text' 
                name='inputProgress' 
                value={progress}
                onChange={(event) => {setProgress(event.target.value)}} 
            />

            {/* NOM NOM NOM NOM... */}
            <button onClick={handleClick}>Track</button>
        </section>
    );
}
 
export default TrackLevel;

// I hope this break down of the Context Concept helped a little in untying any brain-knots
// Have fun 🤘
// - @codingLaws