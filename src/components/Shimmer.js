const Shimmer = () => {
  return (
    <div className='flex flex-wrap m-4 justify-center'>
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={'shimmer' + index} className='w-52 h-48 m-2 bg-gray-200 shadow-xl'></div>
        ))}
    </div>
  )
}

export default Shimmer;