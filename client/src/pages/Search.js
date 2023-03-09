import React from 'react'
import Layout from './../components/Layout/Layout';
import { useSearch } from "../context/search";
const Search = () => {
  return (
    <Layout title={'Search-result'}>
        <div className="container">
            <div className="text-center">
                <h1>Search Results</h1>
                <h5>{}</h5>
            </div>
        </div>
        </Layout>

  )
}


export default Search