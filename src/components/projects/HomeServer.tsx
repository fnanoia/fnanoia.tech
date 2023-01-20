const HomeServer = () => {
    return (

        <div className="flex w-full h-full justify-center items-center">
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                <div className="sm:text-center text-4xl font-bold hover:text-[#A81D33]">
                    Home server
                </div>
                <div className="space-y-4">
                    <div>
                        I build a home server with an old PC. It offers cloud services like file storage and
                        shared folders within my local network(SSH connection, FTP and SMB protocols)
                        <br />
                        OS: OpenMediaVault 6
                        <br />
                        Software: Nextcloud(file administrator), Docker(additional services in containers),
                        Nginx(proxy manager), Cloudflare(DNS and security)
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HomeServer;