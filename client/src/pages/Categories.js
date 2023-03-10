import React,{useState,useEffect} from 'react';
import useCategory from "../hooks/useCategory";
import Layout from './../components/Layout/Layout';

const Categories = () => {
    const categories = useCategory();
  return (
    <Layout title={'All Categories'}>
        <h1>All Categories</h1>
    </Layout>
  )
}

export default Categories