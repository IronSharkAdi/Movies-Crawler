import  Image from 'next/image'
import HeaderItems from './HeaderItems'

import { BadgeCheckIcon , CollectionIcon , HomeIcon , LightningBoltIcon , SearchIcon , UserIcon} from '@heroicons/react/outline'


function Header() {
    return (
        <header> 
            <HeaderItems title="Home"   Icon={HomeIcon}/>
            <Image src="/img/logo3.png" height="100" width="100" className="object-contain"   />
        </header>
    )
}

export default Header
