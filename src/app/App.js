import React from "react";
import About from "../components/About";
import SignUp from "../components/SignUp";
import Articles from "../components/Articles";
import Article from "../components/Article";
import Categories from "../components/Categories";
import Category from "../components/Category";
import Author from "../components/Author";
import Profile from "../components/Profile";
import EditProfileForm from "../components/EditProfileForm";
import Root from "../components/Root";
import "./App.css";

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";


const router = createBrowserRouter(createRoutesFromElements(

  // root route
  <Route path="/" element={ <Root /> }>

    <Route path="about" element={<About />}/>
    
    <Route path="articles" element={ <Articles /> }/>
    <Route path="articles/:title" element={ <Article /> }/>
    <Route path="authors/:name" element={<Author />} />
    
    <Route path="categories" element={<Categories />}>
      <Route path=":name" element={<Category />} />
    </Route>
  
    <Route path="sign-up" element={ <SignUp /> }/>

    <Route path="profile" element={<Profile />}>
      <Route path="edit" element={<EditProfileForm />} />
    </Route>
       
  </Route>
));

function App() {
  return (
    <RouterProvider router={ router } />
  );
}

export default App;