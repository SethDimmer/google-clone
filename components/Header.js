import React, { useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';
// import HeaderOptions from './HeaderOptions';

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = e => {
        e.preventDefault();

        const term = searchInputRef.current.value;

        if (!term) return;

        router.push(`/search?term=${term}`);
    }

    return (
        <header className='sticky top-0 bg-white'>
            <div className='flex w-full p-6 
            items-center'>
                <Image
                    src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    height={40}
                    width={120}
                    onClick={() => router.push('/')}
                    className='cursor-pointer' />
                <form className='flex flex-grow px-6 py-3 ml-10 mr-5 border-gray-200 rounded-full
        shadow-lg max-w-3xl items-center'>
                    <input ref={searchInputRef}
                        className='flex-grow w-full focus:outline-none'
                        type="text" 
                        defaultValue={router.query.term} 
                        />
                    <XIcon className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition
                duration-100 transform hover:scale-125'
                        onClick={() => (searchInputRef.current.value = "")} />
                    <MicrophoneIcon className='mr-3 h-6 hidden sm:inline-flex
                text-blue-500 
                border-l-2 pl-4
                 border-gray-300'/>
                    <SearchIcon className='hidden h-6 sm:inline-flex text-blue-500' />
                    <button hidden type='submit' onClick={search}>Search</button>
                </form>
                <Avatar className="ml-auto" url="https://lh3.googleusercontent.com/fife/AKsag4NJMSnBcmhxdQGJW48-lSXNGbA8zgj-X0AtpDGyPFUIGjdZO7bI25Y65crtLrHm0w6Dew9F5mJtjp9LrfFO4O8hMOB6nO6-eUQqKs81fh1pEW-dForfbosJyyDhO2RkSirM3GAMvX7-kCBcnglOGbc_wTK0WUzC0yAauLlhls6lVv_LWmrDPcscza26fXAebTTc-9Uu6ceKxdy8dl7qexTjtwbtCjsKKQPZ0ObQnweBbaszWxFTcyE6lgGXqATjqXgERlimlRGfEKncQmpQnxxQTXCIyoeEMx0WAsRD8pGKF1M1Uco_z2REzEmI3sit7NNXQy53CA18Nv3DRCdbGaog5sNfY1xXEKoS4hq-h6JTwEBJbeMibKb0-dQ7ae7mpmDtoEquK-tWm6_KZapaT2b76MVEkGnITIhGHiwf0rBivErWHE8JRNxK1xJBqfihKHSLtsuLAPg-bG0nFrUBHs7-rlYAMb9EG6J3HxOCCcWk0bRt0qNQwNnnChUKsB-FfGQWJrSWCTOq3G4iiC1rBaySwe9g4lgqZcpwHo-4qGUB6aRCptLiKtWsgVIkEElxg49hY9nt4twctCVIKtpib6-KLAEUbPLJazQBKuJJyMsMcwfg2xCpMjFF03xwpofKA-JkDpwgvmJwq95WPilkEex6_FQbtHxz7nsEe_xFiC0TYHW3I40YvpmJifh1ihnaM7LB8OKk0e2QqIOsCtOuGfy07VZI09UUazQq0O7lYOCjATb_mjUahdmCQ5Q5cggol-NTK5JMVvf6KZxVlPEIOKbRgzWXoEL0zcP17COu__bGQs4ow3Imw_dkRSnu5dVKnxD22ht88sXByPN4nxSSk8-aS0mf5iaN5F1YcAcYVEPp40dm_W5njtIk2qP_T1NFbp_fS8uO_iv4x-VIs_uu0Koa4sWzZ2jqxxf3Mu8cCJ-qTj2_n-Vn3HwYSRhYi-NbDxH9o-czbVQp-oRGJJiCGs92mo4DveiTXC0usieWmlbeQvkF-aHD4ohra-BJbUzi_RSA6nqyIewxfGxr63Sy5SIY5-PmIma5hkWoW-aC8zkDm9fVfYd7VoKCbmfiO7Cerrgpj17yVSLAb38Gg1zHoVDwDX29S7iMB1mJVnapqI0oLBVpUsTsEc4wz5YQpw0I-J2eF9cwV3zneH8hKmsZI8BAvfdYY2QYwdsKZiKYlShuQXNsjLRpy-QK0PS-FO0lbLE4lMeLDByTOkwONsTPxUe3U6C5nNyWvGoPH4KSJO8DFgv-l7eQxE2MeQY4jNtLJbBjvkuFArxxG6FRbNNwdVaz1R8pIEp4IsH4GKA4BDp3vYO5CG3RS_-av3caec7pTPJVIWxdZKZX6kQZDu_118cSJv1qD6s1_ZaXcLaneOb5ZNrksJygexXoKFaLrZfRJCHWjFn_PtJdtsmMk9iWQpwMAnkhe8eAatpqzNzNjROdF1nQzMJFQcxk2Kk=s64-c"/>
            </div>

            {/* HeaderOptions */}
            <HeaderOptions />
        </header>
    )
}

export default Header