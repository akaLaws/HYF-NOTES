# Notes from the lessons

### Context
So the point of context is to avoid props drillig. 

provider : transmitter

consumer : receiver

1. Create the context
2. Define/set the provider - What to use, the list of functions and variables you want to share
3. Define/set the consumer - how to use it, this is the hook useContext (I have kept this seperate for structure)
4. Refactor
 * in the example: move the states from app.js to the context
 * clean the app.js with condition (make a component for the condition keep it modular)

**Q:** Why did you use useMemo? - I've seen it before but It seems unecessary?
**A:** Because in heavy applications the nested providers might force to rerender the parent provider cousing a perfomance issue. You shouldn't optimize with useMemo untill you are sure it's an issue with performance though. 

What you want global, as themes, tokens etc. is what you put in context. 

[source code fromt he lesson](https://github.com/tpetrina/hyf-context-tutorial)
[video on the lesson]()
[article - how to use context effectively](https://kentcdodds.com/blog/how-to-use-react-context-effectively)
[preparation - useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)