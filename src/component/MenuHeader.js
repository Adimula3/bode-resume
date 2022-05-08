import React, {useState} from 'react';
import "../styles/style.css";
import { slide as Menu } from 'react-burger-menu';


function MenuHeader() {

    const [isAOpen, setIsOpen] = useState(true)

    const [setOpen, setOpenClose] = useState(false)

    console.log("Handle is OPen: " + isAOpen)

    const handleOnClose = () => {

        setOpenClose(true)
        console.log("Handle CLose: " + setOpen)

    }

    const handleOnOpen = () => {
        if(!setOpen){
            setOpenClose(true)
        }
        else{
            setOpenClose(false)
        }

        console.log("Handle Open: " + setOpen)

    }



    return (
        <div className="Menu-header">
            <Menu pageWrapId={ "page-wrap" }  noOverlay isClose={() => {setIsOpen((prevState) => !prevState)}} onOpen={handleOnOpen} onClose={ handleOnClose } isOpen={() => {setIsOpen((prevState) => !prevState)}}>
                <a id="" className="menu-item" href="/"><i className='bx bx-home'></i><span className="text"></span>Home</a>
                <a id="" className="menu-item" href="/#about"><i className='bx bx-user'></i><span className="text"></span>About</a>
                <a id="" className="menu-item" href="/#resume"><i className='bx bx-file-blank'></i><span className="text"></span>Resume</a>
                <a id="" className="menu-item" href="/about"><i className='bx bx-book-content'></i><span className="text">Portfolio</span></a>
                <a id="" className="menu-item" href="/#services"><i className='bx bx-server'></i><span className="text"></span>Services</a>
                <a id="" className="menu-item" href="/#contact"><i className='bx bx-envelope'></i><span className="text"></span>Contacts</a>
            </Menu>
        </div>
    );
}

export default MenuHeader;