import React, { useState } from 'react'
import Child from './Child'

export default function Parent() {
    const [name,setname]=useState('React')
     return (

        <Child name='pavithra' />


        
  )
}
