import React ,{useEffect} from 'react'

const RBGoogleForm = ()=>{
    useEffect(() =>{
        document.title="Resume Builder Google Form";
        document.querySelector("iframe").addEventListener("load", 
        function() {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    );
    }, []);

    return (
        <div class="relative my-6 flex-1 px-4 sm:px-6">
                <div>
                    <iframe
                    title="Google Form"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSf30hycYl-yTLYZOuUSS7jP5AatWpNdNRYmTI5jjporyPX6Qw/viewform?usp=sf_link"
                    width="100%"
                    height="1000px"
                    >
                    Loading...
                    </iframe>
                </div> 
            </div>
    );
}

export default RBGoogleForm;