import {ImagesList, RandomImage} from "jiale-mr";
import {Fragment, useState} from "react";
import pkg from "jiale-mr/package.json"

function App() {

    const [image, setImage] = useState(RandomImage());
    const [tabs, setTabs] = useState("home");

    return (
        <>
            <div className={"lg:flex min-h-screen w-full bg-black text-white"}>
                <aside className={"flex-1 lg:block hidden"}>
                </aside>
                <main className={"flex-4 md:p-8 p-6"}>
                    <h1 className={"text-3xl font-semibold font-mono"}>Jiale Mascot / Image Randomiser</h1>
                    <p className={"text-gray-400"}>A client side random image library by Jia Le.</p>
                    <div className={"flex gap-2 text-[16px] mt-4 items-center text-center"} id={"tabs"}>
                        <button
                            onClick={() => {
                                setTabs("home")
                            }}
                            className={`cursor-pointer ${tabs === "home" && "text-lime-300"}`}
                        >
                            Home
                        </button>
                        <button
                            onClick={() => {
                                setTabs("gallery")
                            }}
                            className={`cursor-pointer ${tabs === "gallery" && "text-lime-300"}`}
                        >
                            Gallery
                        </button>
                        <button
                            onClick={() => {
                                setTabs("usage")
                            }}
                            className={`cursor-pointer ${tabs === "usage" && "text-lime-300"}`}
                        >
                            Usage
                        </button>
                        <a
                            href={"https://github.com/Jiale0709/jiale-mascot-randomiser"}
                            target={"_blank"}
                            className={`ml-auto flex  cursor-pointer text-blue-300  font-mono font-semibold`}
                        >
                            Repo
                        </a>
                    </div>
                    {tabs === "home" && (
                        <Fragment>
                            <img
                                className={"flex rounded-md md:max-w-2xl lg:max-w-3xl ml-auto mr-auto mt-6"}
                                src={image.toString()}
                                alt="Random Mascot"
                            />
                            <button
                                className={"cursor-pointer mt-6 bg-lime-300 p-2 pl-4 pr-4 rounded-md text-black font-mono font-semibold text-sm"}
                                onClick={() => {
                                    setImage((prev) => {
                                        let newImage = RandomImage();
                                        while (newImage === prev) {
                                            newImage = RandomImage();
                                        }
                                        return newImage;
                                    });
                                }}
                            >
                                Random Image
                            </button>
                        </Fragment>
                    )}
                    {tabs === "gallery" && (
                        <Fragment>
                            <h2 className={"mt-8 text-sm font-mono"}>
                                These are the Image available in
                                <code className={" ml-2 bg-gray-700 rounded-md pl-2 pr-2 text-sm pt-0.5 pb-0.5"}>
                                    {pkg.version}
                                </code>
                                .
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 gap-4 space-y-4">
                                {ImagesList.map((i, key) => (
                                    <div key={key}>
                                        <img
                                            onClick={() => {
                                                window.open(`https://cdn.jsdelivr.net/gh/Jiale0709/jiale-mascot-randomiser@master/images/avif/${i}.avif`)
                                            }}

                                            src={`https://cdn.jsdelivr.net/gh/Jiale0709/jiale-mascot-randomiser@master/images/avif/${i}.avif`}
                                            alt={"Demo Images " + (key + 1)}
                                            loading={key < 20 ? "eager" : "lazy"}
                                            className={"object-cover aspect-video rounded-md cursor-zoom-in"}
                                        />
                                        <h3 className={"mt-4 font-mono flex justify-between"}>
                                            <span
                                                className={"font-semibold font-mono"}>
                                                {i.replaceAll("_", " ").slice(0, 1).toUpperCase() + i.replaceAll("_", " ").slice(1).toLowerCase()}
                                            </span>
                                            <div className={"flex gap-2 text-sm font-extrabold"}>
                                                <button
                                                    className={"cursor-pointer text-blue-400 hover:text-blue-500"}
                                                    onClick={() => {
                                                        navigator.clipboard.writeText(`https://cdn.jsdelivr.net/gh/Jiale0709/jiale-mascot-randomiser@master/images/avif/${i}.avif`)
                                                    }}
                                                >
                                                    📋Copy URL
                                                </button>
                                                <button
                                                    className={"cursor-pointer text-lime-400 hover:text-lime-500"}
                                                    onClick={() => {
                                                        fetch(`https://cdn.jsdelivr.net/gh/Jiale0709/jiale-mascot-randomiser@master/images/avif/${i}.avif`)
                                                            .then(res => res.blob())
                                                            .then(blob => {
                                                                const blobUrl = URL.createObjectURL(blob);
                                                                const a = document.createElement("a");
                                                                a.href = blobUrl;
                                                                a.download = `${i} - Jia Le Mascot x Image Randomiser - Jia Le's Project`;
                                                                a.click();
                                                                URL.revokeObjectURL(blobUrl);
                                                            });
                                                    }}
                                                >
                                                    👇Download
                                                </button>
                                            </div>
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        </Fragment>
                    )}
                    {tabs === "usage" && (
                        <Fragment>
                            <h2 className={"mt-8 mb-3 font-mono text-[16px]"}>Installation</h2>
                            <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg overflow-x-auto">
                                <code>
                                    npm install jiale-mr
                                </code>
                            </pre>
                            <h2 className={"mt-8 mb-3 font-mono text-[16px]"}>Usage - RandomImage</h2>
                            <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg whitespace-pre-wrap wrap-break-word">
                                <code className="font-mono text-sm">
                                    {`import {RandomImage} from "jiale-mr";`}
                                    <br/><br/>
                                    // print a random image
                                    <br/>
                                    {`console.log(RandomImage());`}
                                    <br/><br/>
                                    //output: https://cdn.jsdelivr.net/gh/Jiale0709/jiale-mascot-randomiser@master/images/avif/rain.avif

                                </code>
                            </pre>
                            <h2 className={"mt-8 mb-3 font-mono text-[16px]"}>Usage - ImagesList</h2>
                            <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg whitespace-pre-wrap wrap-break-word">
                                <code className="font-mono text-sm">
                                    {`import {ImagesList} from "jiale-mr";`}
                                    <br/><br/>
                                    // print an array of image name
                                    <br/>
                                    console.log(ImagesList);
                                    <br/><br/>
                                    /* output:
                                    [
                                        "beach",
                                        "christmas_present",
                                    ]
                                    */
                                </code>
                            </pre>
                            <br/>
                        </Fragment>
                    )}
                </main>
                <aside className={"flex-1 lg:block hidden"}>
                </aside>
            </div>
        </>
    )
}

export default App
