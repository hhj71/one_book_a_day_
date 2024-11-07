import logo from './logo.svg';
import './App.css';
import Header from './components/main/Header';
import Footer from './components/main/Footer';
import Home from './components/main/Home'
import { Fragment } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BookList from "./components/book/BookList";
import BoardList from "./components/board/BoardList";
import BoardDetail from "./components/board/BoardDetail";
import { QueryClient, QueryClientProvider } from 'react-query';
import BookDetail from "./components/book/BookDetail";
import Login from "./components/member/Login";
import SignUp from "./components/member/SignUp";
import BoardInsert from "./components/board/BoardInsert";

function App() {
    const queryClient = new QueryClient();
  return (
      <Fragment>
        <Router>
          <Header/>
            <QueryClientProvider client={queryClient}>
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path={"/Book/list"} element={<BookList/>}/>
              <Route path={"/Book/detail/:bno"} element={<BookDetail/>}/>
              <Route path={"/Board/list"} element={<BoardList/>}/>
              <Route path={"/Board/insert"} element={<BoardInsert/>}/>
              <Route path={"/Board/detail/:no"} element={<BoardDetail/>}/>
              <Route path={"/Member/login"} element={<Login/>}/>
              <Route path={"/Member/signup"} element={<SignUp/>}/>
          </Routes>
            </QueryClientProvider>
          <Footer/>
        </Router>
      </Fragment>
  );
}

export default App;
