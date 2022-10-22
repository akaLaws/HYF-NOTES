
// -------------------------------------------------------------------------
//                        DISCLAMIMER
// for any real world application examples, that actually works: 
// see the examples from the Reac2 lesson in the Class slack channel
// The purpose of these examples are purely meant for instructional purpose,
// providing a context for understanding by explaining the code directly. 
//                   (pun totally intended!!)
// -------------------------------------------------------------------------


// The components and hooks needed to making our context collection  /  The recipe...
import { createContext, useContext, useState } from "react";

// Creating the context  /  The pots and pans...

// A context a collection of global variables/methods you want to acces from ANY component without the use of props
// In this case I want to globally save how my level of understanding this concept.
const levelContext = createContext({});

// The Provider   /  The indgredients...

// This is the collection of methods we want to acces globally - Provider is the wrapper for these
// By exporting the function we make it accesable by extracting it through our Consumer hook
export function levelProvider({ children }) {

    // The state i want to update through my functions is my level - we always start at level 1 obviously
    const [myLevel, setMyLevel] = useState(1);

    // This value objects is what contains the methods or properties we want to access
    // They don't HAVE to be in an object but it means we only have to call"value" in the return component rather than list the methods names in the value atrribute
    // This is a nice-to-have-habit of coding context as the list might get long and also - you avoid repeating your self - REFACTORING FTW!
    const value = {

        // Just gonna sneak in my state into the value list here.
        ...myLevel,

        // This is my leveling method it accepts true or false and sets my level state in true - with a nice output message.
        levelUp: (boolean) => {
            boolean && setMyLevel(myLevel++);
            console.log(`Congratz you have leveled up your understanding 😃`);
        },
        
        // This is my progress tracking method - sometimes i'm only 60% along when understanding a new concept and I just need to read/hear/watch it through a couple of times to get to 100%
        // If the arguments is set it outputs a peptalk - we all need that once in a while, might as well automate them, am I right?
        almostThere: (howFar) => {
            howFar && console.log(`You only need ${100-Number.parseInt(howFar)}% of understanding the subject untill next level`);
        }
    
    };

    // This part is the JSX componennt of our context  /  Cooking the indgredients...

    // This returns the creation of a Provider for our leveContext and sets the value attribute to the children of the levelProvider function - our value object in this case
    // it takes some brain-knotting sometimes to reach the Eureka on this part
    // roughly explaining it : the "children" argument will be the specific method/property of the value object we want to acces. 
    // the .Provider is t a component method from the createContext import which we have saved in our levelContext constant.
    return <levelContext.Provider value={value}>{children}</levelContext.Provider>;    

};

// The Consumer  /  The final dish...

// This is our custom hook for acessing and using our context. 
// The hook is our interface for acessing our properties/methods from the Provider function
// This is the final piece of the puzzle and wat we will use throughout our app
export function useLevel() {
    const progress = useContext(levelContext);
    return progress;
  };
