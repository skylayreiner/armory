import React from 'react'

export default function Searchbar() {
  return (
    <div className="flex flex-col sm:flex-row bg-gray-50 rounded-sm m-2 w-min divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-600">
      <div className="flex py-3 sm:py-1">
        <label className="sr-only" htmlFor="character-name-input">
          Choose a flavor:
        </label>
        <input
          className="px-2 bg-gray-50 outline-none"
          type="text"

          placeholder="Character"
          id="character-name-input"
          name="ice-cream-choice"
        />
      </div>
      <div className="flex py-3 sm:py-1">
        <label className="sr-only" htmlFor="ice-cream-choice">
          Choose a flavor:
        </label>
        <input

          className="px-2 bg-gray-50 outline-none"
          type="text"
          list="ice-cream-flavors"
          placeholder="Region"
          id="ice-cream-choice"
          name="ice-cream-choice"
        />
        <datalist className="px-2 bg-blue-600" id="ice-cream-flavors">
          <option value="Chocolate"></option>
          <option value="Coconut"></option>
          <option value="Mint"></option>
          <option value="Strawberry"></option>
          <option value="Vanilla"></option>
        </datalist>
      </div>
      <div className="flex py-3 sm:py-1">
        <label className="sr-only" htmlFor="ice-cream-choice">
          Choose a flavor:
        </label>
        <input

          className="px-2 bg-gray-50 outline-none"
          type="text"
          list="ice-cream-flavors"
          placeholder="Server"
          id="ice-cream-choice"
          name="ice-cream-choice"
        />
        <datalist className="px-2" id="ice-cream-flavors">
          <option value="Chocolate"></option>
          <option value="Coconut"></option>
          <option value="Mint"></option>
          <option value="Strawberry"></option>
          <option value="Vanilla"></option>
        </datalist>
      </div>
      <button className="p-2 sm:px-5 sm:py-0 rounded-b-sm sm:rounded-r-sm sm:rounded-b-none bg-blue-700 focus:outline-none cursor-pointer">
        <span className="uppercase text-gray-100 hover:text-gray-400">SEARCH</span>
      </button>
    </div>
  )
}
