# Reconcilation:

[Reconcilation documentation in React Docs](https://legacy.reactjs.org/docs/reconciliation.html)

- Algorithm beihind virtual dom
- Whenever `render` is called in a react application a tree of react nodes or elements that decsribes the app is generated and svaed in the memory.
- This tree is then flushed into the rendering environment.
- When the app is updated(usually via useState or props) a new tree is generated.
- React uses reconcilation alogorithm to then update the UI efficiently to match the most recent tree.
- Reconciler does the work of computing which parts of the tree have changed.
- Rendered then uses that information to actually update the rendered app.

# React Fibre : 

https://github.com/acdlite/react-fiber-architecture

[React Fibre video in React Conference](https://www.youtube.com/watch?v=aV1271hd9ew)

React Fiber is an ongoing reimplementation of React's core algorithm. It is the culmination of over two years of research by the React team.

The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.

Goals of fibre:

- Pause work and come back to it later.
- Assign priority to different types of work.
- Reuse previously completed work.
- Abort work if its no longer needed
