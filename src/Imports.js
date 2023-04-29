import React from 'react';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import HomePage from './pages/home/HomePage';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Navbar from './components/navbar/navbar';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Featured from './components/featured/Featured';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { ListComponent } from './components/list/List';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from './components/ListItem/Listitem';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import WatchPage from './pages/watchPage/WatchPage';
import Register from './pages/Register/Register';
import LoginPage from './pages/home/Login/LoginPage';
import ReactPlayer from 'react-player';

import {
  useParams,
  useNavigate,
  useLocation,
  Link,
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import axios from 'axios';
import headers from './authHeader';

export {
  headers,
  ReactPlayer,
  axios,
  useParams,
  useNavigate,
  useLocation,
  Link,
  BrowserRouter,
  Routes,
  Route,
  LoginPage,
  Register,
  WatchPage,
  ThumbDownOffAltOutlinedIcon,
  ThumbUpOutlinedIcon,
  AddIcon,
  useEffect,
  useLayoutEffect,
  useRef,
  ListItem,
  ArrowForwardIosOutlinedIcon,
  ArrowBackIosNewOutlinedIcon,
  ListComponent,
  InfoOutlinedIcon,
  PlayArrowIcon,
  ArrowDropDownIcon,
  NotificationsIcon,
  SearchIcon,
  React,
  HomePage,
  Navbar,
  AcUnitIcon,
  useState,
  Featured,
};
