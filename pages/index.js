import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Result from '../components/Result'
import requests from '../utils/requests'
// import Image from 'next/image'

export default function Home(props) {
    console.log(props)
    return (
        <>
            <Head>
                <title>Hulu Is</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header/>
            <Nav/>
            <Result/>
        </>
  )
}

export async function getServerSideProps(context){

    const genre = context.query.genre

    const request =await fetch(
        `https://api.themoviedb.org/3/${requests[genre]?.url || requests.fetchTrending.url}`
    ).then((res) => res.json());

    return{
        props:{
            results : request.results
        }
    }
}