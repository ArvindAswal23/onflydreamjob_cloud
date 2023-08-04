import React ,{useEffect} from 'react'

const RBGoogleForm = ()=>{
    useEffect(() =>{
        document.title="Resume Builder Google Form";
    },[])
    return (
        <div class="relative my-6 flex-1 px-4 sm:px-6">
                <div>
                    <iframe
                    title="Google Form"
                    src="https://forms.gle/FLRc6Ju8bDepsckJ9"
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