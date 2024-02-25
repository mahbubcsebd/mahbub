import mountainHiking from '@/assets/images/icons/mountain-hiking.svg';
import movieWatching from '@/assets/images/icons/movie-watching.svg';
import photography from '@/assets/images/icons/photography.svg';
import travelling from '@/assets/images/icons/travelling.svg';
import Image from 'next/image';
const LoveToDo = () => {
    return (
        <div className="love-to-do">
            <div className="love-to-do-area">
                <div className="container">
                    <div className="mb-12 flex justify-center">
                        <h2 className="text-4xl text-black dark:text-white font-bold">
                            Love To Do
                        </h2>
                    </div>
                    <div className="grid grid-cols-4 gap-8">
                        <div className="flex flex-col gap-3 justify-center items-center border border-[#66696F] rounded-[30px] bg-[#111] h-[220px]">
                            <div className="w-24 h-24 rounded-full grid place-content-center border border-[#5E6066]">
                                <Image
                                    src={travelling}
                                    alt="travelling icon"
                                />
                            </div>
                            <p className="text-3xl text-black dark:text-white font-bold love-to-do-title">
                                Travelling
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 justify-center items-center border border-[#66696F] rounded-[30px] bg-[#111] h-[220px]">
                            <div className="w-24 h-24 rounded-full grid place-content-center border border-[#5E6066]">
                                <Image
                                    src={mountainHiking}
                                    alt="mountain hiking icon"
                                />
                            </div>
                            <p className="text-3xl text-black dark:text-white font-bold love-to-do-title">
                                Mountain Hiking
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 justify-center items-center border border-[#66696F] rounded-[30px] bg-[#111] h-[220px]">
                            <div className="w-24 h-24 rounded-full grid place-content-center border border-[#5E6066]">
                                <Image
                                    src={photography}
                                    alt="photography icon"
                                />
                            </div>
                            <p className="text-3xl text-black dark:text-white font-bold love-to-do-title">
                                Photography
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 justify-center items-center border border-[#66696F] rounded-[30px] bg-[#111] h-[220px]">
                            <div className="w-24 h-24 rounded-full grid place-content-center border border-[#5E6066]">
                                <Image
                                    src={movieWatching}
                                    alt="movie watching icon"
                                />
                            </div>
                            <p className="text-3xl text-black dark:text-white font-bold love-to-do-title">
                                Movie Watching
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoveToDo;
