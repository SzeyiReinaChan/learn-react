// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// import PackingList from './components/props_item'
// import Profile from './components/profile'
// import Gallery from './components/gallery'
// import Profile from './qcomps/profile_mistake'
// import MyComp from './qcomps/firstcomp'
// import Bio from './qcomps/bios'
// import TodoList from './qcomps/todos'
// import Profile from './components/profile_props'
// import Gallery from './qcomps/gallery_props'
import PackingList from './components/props_item'

export default function Home() {
  return (
    <div className={styles.main}>
      <PackingList />
    </div>
  )
}
