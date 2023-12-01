import React from 'react'
import PeopleCards from '../cards/PeopleCards'

const Peoplelist = ({people}: any) => {
  return (
    <div className="gap-5 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 mt-10 pb-5">
        {people.map((item: any,index: number) => (
          <PeopleCards key={item.id} img={item.profile_path} name={item.name} id={item.id}/>
          ))}
      </div>
  )
}

export default Peoplelist