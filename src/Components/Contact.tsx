import "../App.css";

function Contact() {
    return (
        <>
            <div className="bg-[#494949]/30 pb-6 sm:pb-3 ms-6 me-6 mt-3 mb-5 rounded-4xl shadow-[0px_10px_20px_rgba(0,0,0,0.8)] font-[Lexend] overflow-hidden w-fit sm:w-3/6 lg:w-3/6 place-self-center">
                <div className=" text-white p-6 rounded-2xl w-full max-w-md place-self-center">
                    <h2 className="text-2xl font-bold mb-4 text-center">
                        My Contact Information
                    </h2>

                    <div className="space-y-4">
                        <div className="border-t border-gray-600" />

                        <div className="flex items-center space-x-3">
                            <span className="text-yellow-400 text-xl">📞</span>
                            <a href="tel:+5926746188">(592) 674-6188</a>
                        </div>

                        <div className="border-t border-gray-600" />

                        <div className="flex items-center space-x-3">
                            <span className="text-yellow-400 text-xl">✉️</span>
                            <a href="mailto:jramdeholl1@gmail.com">jramdeholl1@gmail.com</a>
                        </div>

                        <div className="border-t border-gray-600" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
