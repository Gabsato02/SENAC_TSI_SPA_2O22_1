import React, { useReducer } from 'react'

const actions = [
  {
    label: '+',
    action: 'SUM',
  },
  {
    label: '-',
    action: 'SUBTRACT',
  },
  {
    label: '* 2',
    action: 'DOUBLE',
  },
  {
    label: '/ 2',
    action: 'SPLIT',
  },
  {
    label: '= 0',
    action: 'CLEAR',
  },
];

const reducer = (state, action) => {
  if (action.type === 'SUM') return { ...state, counter: state.counter++ }
  if (action.type === 'SUBTRACT') return { ...state, counter: state.counter-- }
  if (action.type === 'DOUBLE') return { ...state, counter: state.counter * 2 }
  if (action.type === 'SPLIT') return { ...state, counter: state.counter / 2 }
  if (action.type === 'CLEAR') return { ...state, counter: 0 }
}

const App = () => {
  const initialValue = { counter: 0 };
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <div className="row mt-5">
        <div className='col-12 d-flex justify-content-center text-center'>
          <span>{state.counter}</span>
        </div>
          <div className="col-8 mt-4 mx-auto d-flex justify-content-center">
          { actions.map((action) =>
            <button
              className="mx-2 w-50"
              key={action.action}
              onClick={() => dispatch({ type: action.action })}
            >
              {action.label}
            </button>)
          }
        </div>
      </div>
    </>
  )
}

export default App
