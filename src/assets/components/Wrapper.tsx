
const Wrapper = ({children}) => {
    console.log(children)
  return (
    <div className='flex justify-center'>
      {children}
    </div>
  )
}

export default Wrapper
