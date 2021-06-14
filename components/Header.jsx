import  Image from 'next/image'
import HeaderItems from './HeaderItems'

import { BadgeCheckIcon , CollectionIcon , HomeIcon , LightningBoltIcon , SearchIcon , UserIcon} from '@heroicons/react/outline'


function Header() {
    return (
        <header className="flex flex-col sm:flex-row justify-between items-center "> 
            <div className="flex flex-grow  justify-evenly max-w-2xl ">
                <HeaderItems title="Home"   Icon={HomeIcon}/>
                <HeaderItems title="Collection"   Icon={CollectionIcon}/>
                <HeaderItems title="Verified"   Icon={BadgeCheckIcon}/>
                <HeaderItems title="Trending"   Icon={LightningBoltIcon}/>
                <HeaderItems title="Search"   Icon={SearchIcon}/>
                <HeaderItems title="Account"   Icon={UserIcon}/>
            </div>
            <Image src="/img/logo3.png" height="100" width="100" className="object-contain"   />
        </header>
    )
}

export default Header
