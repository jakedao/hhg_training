import React, { useState, useEffect } from "react";

import { Articles } from "../../components";
import {instance, URI} from '../../api'

const ArticlesContainer = () => {
  const [article, setArticles] = useState([0]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = () => {
    setLoading(true);
    instance.get(URI.getArticles)
      .then((res) => {
        setArticles(res.data.articles);
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
      });
  };

  return <Articles data={article} fetchingData={isLoading}/>;
};

export default ArticlesContainer;
