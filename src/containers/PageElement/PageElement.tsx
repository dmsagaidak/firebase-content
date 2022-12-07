import React, {useCallback, useEffect, useState} from 'react';
import {Page} from "../../types";
import axiosApi from "../../axiosApi";

interface Props {
  pageName: string;
}

const PageElement: React.FC<Props> = ({pageName}) => {
  const [content, setContent] = useState<Page>({
    title: '',
    content: ''
  });

  const fetchOnePage = useCallback(async (pageName: string) => {
    try{
      const pageResponse = await axiosApi.get<Page>(`/pages/${pageName}.json`);
      setContent(pageResponse.data);
    }catch (e) {
      console.log(e)
    }
  }, [pageName]);

  useEffect( () => {
    void fetchOnePage(pageName)
  }, [fetchOnePage])

  return (
    <div className="p-2">
      <h4>{content.title}</h4>
      <p>{content.content}</p>
    </div>
  );
};

export default PageElement;