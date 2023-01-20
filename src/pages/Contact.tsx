const Contact = () => {
    return (
        <div id='contact' className='flex justify-center items-center p-10'>
            <form method='POST' action="https://getform.io/f/009fcebf-8c3e-4318-85c9-4a763d91d95c" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#A81D33] text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'> ~./nanoiafrancisco@gmail.com </p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2' name="message" rows={10} placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-[#A81D33] hover:border-[#A81D33] px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
            </form>
        </div>
    )
}

export default Contact;