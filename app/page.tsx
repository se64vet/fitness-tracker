'use client'
import React, { useState } from "react"

export default function Home() {
  const [searchKey, setSearchKey] = useState("");
  const [exercises, setExercise] = useState<any>();

  const handleOnChange = async (value: string) =>{
    setSearchKey(value)
    const baseURL = '/api/v1/exercises';
    let apiURL;
    searchKey === "" ? apiURL = baseURL : apiURL = baseURL + `?name=${value}` 

    const exercises = await fetch(apiURL)
    const data = await exercises.json()
    setExercise(data);
  }
  return (
    <main>
      <form>
        <input 
        className="text-black"
        type="text" 
        onChange={(e) => handleOnChange(e.target.value)} 
        value={searchKey}/>
      </form>

      {exercises && exercises.map((ex:any, idx:number) => (
        <p key={idx}>{ex.name}</p>
      ))}
    </main>
  )
}
