import React, {useCallback, useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import {useNavigate} from "react-router-dom";
import {Page} from "../../types";


const Admin = () => {
  const navigate = useNavigate();
  const [item, setItem] = useState('')
  const [page, setPage] = useState<Page>({
    title: '',
    content: '',
  })

  const selectedItem = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const item = e.target.value;
    setItem(item)
  }

  const fetchPage = useCallback( async (item: string) => {
    try{
      const pageResponse = await axiosApi.get(`/pages/${item}.json`);
      setPage(pageResponse.data);
    }catch (e) {
      console.log(e)
    }
  }, [item]);

  useEffect(() =>{
    void fetchPage(item)
  }, [fetchPage, item]);

  const onPageChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setPage(prev => ({...prev, [name]: value}))
  }

  const updatePage = async (e: React.FormEvent) => {
    e.preventDefault();
    await axiosApi.put(`/pages/${item}.json`, page);
    navigate(`/pages/${item}`)
  }

  return (
    <form className="p-4" onSubmit={updatePage}>
      <div className="form-group">
        <label htmlFor="page">Select page</label>
        <select
        id="page"
        name="page"
        className="form-select mt-1"
        onChange={selectedItem}
        >
          <option disabled value=''>Select a page</option>
          <option value="about">About</option>
          <option value="contacts">Contacts</option>
          <option value="clients">Clients</option>
          <option value="news">News</option>
          <option value="services">Services</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
        id="title"
        name="title"
        className="form-control"
        value={page.title}
        onChange={onPageChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Content</label>
        <textarea
        id="content"
        name="content"
        className="form-control"
        value={page.content}
        onChange={onPageChange}
        />
      </div>
      <button className="btn btn-success">Edit</button>
    </form>
  );
};

export default Admin;