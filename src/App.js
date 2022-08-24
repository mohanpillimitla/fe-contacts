import { React, useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Login from "./Components/Login";
import Header from "./Navigation/Header";
import { ThemeProvider } from '@mui/material';
import rootTheme from "./Themes/rootTheme";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { loginApi, getPosts,uploadFile } from "./Api/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Posts from "./Components/Posts";

export default function App() {



  const [token, setToken] = useLocalStorage('token', '')
  const [posts, setPosts] = useState()
  const login = async (data) => {
    const [userData, isSuccess] = await loginApi(data)
    if (isSuccess) {
      setToken(userData)
    }
    else {
      toast.error(userData);
    }
  }

  const getPostsData = async () => {
    const [postsData, isSuccess] = await getPosts(token.token)
    if (isSuccess) {
      setPosts(postsData)
    }
    else {
      toast.error(postsData.detail)
    }
  }

  const handleFileUpload = async (file) => {
    const [data,isSuccess] = await uploadFile(file,token?.token)
    if (isSuccess) {
      getPostsData()
    }
    else {
      toast.error(data.detail)
    }
  }





  return (
    <ThemeProvider theme={rootTheme}>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>

        <Routes >

          <Route path="/" element={<Header token={token} setToken={setToken} />}>
            <Route path="/login" element={<Login login={login} />} />

            <Route path="/home" element={<Posts getPostsData={getPostsData} posts={posts} handleFileUpload={handleFileUpload} />} />

          </Route>

        </Routes>
      </Router>
    </ThemeProvider>
  );
}
