import { setStateSearch } from '@/store/reducer/stateSearch'
import { debounce } from 'lodash'
import { useDispatch } from 'react-redux'

export function Search() {
  const dispatch = useDispatch()

  const handleSearch = debounce((searchValue: string) => {
    dispatch(setStateSearch({ find: searchValue }))
  }, 300)

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    handleSearch(value)
  }
  return (
    <input
      type="text"
      className="w-full rounded-2xl border border-gray-300 p-16 text-[2rem] text-black focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
      placeholder="Search"
      onChange={(e) => onSearch(e)}
    />
  )
}
