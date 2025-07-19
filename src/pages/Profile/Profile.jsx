import React from 'react'

const Profile = ({url,wh}) => {
  return (
    <div>
      <img className={`w-${wh} h-${wh} flex items-center justify-center rounded-full hover:bg-gray-300 cursor-pointer transition`} src={url} />
    </div>
  )
}

export default Profile
