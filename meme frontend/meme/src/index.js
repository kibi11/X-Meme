import React, { useState ,useEffect} from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import Addmeme from "./App.js";
import MemeCard from "./card.js";
import "./index.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',


    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',

  },
  gridList: {
    width: 600,
    height: 550,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));



const App = () => {
  const classes = useStyles();
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  function fetchImages(page = 1, take = 30) {
    fetch(`https://gentle-refuge-82765.herokuapp.com/memes`)
      .then((response) => response.json())
      .then((data) => {
        const newImages = [...images, ...data];
        setImages(newImages);
      });
  }
  return (
    <>
    <div class = "head-bar">
      <div class = "items" id = "heading"><h1>X-meme</h1></div>
      <div class = "items" id = "contact"><h3>  <a href = "https://arpansingh.netlify.app/">Contact me</a></h3></div>
    </div>

    <Addmeme images = {images} setImages = {setImages}/>
    <div className="image-container">

        {images.map((tile,index) => (
          <div class ="image-items" key={tile.id}>
            <MemeCard author= {tile.name} caption = {tile.caption} link = {tile.url}/>
          </div>
        ))}

    </div>
    </>
  );
};




ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
