import { StackExpress, StackJwt, StackMongoDb, StackMySql, StackNode, StackPostman, StackSequelize, StackTypescript } from "../stack/Stack";

const Backend = () => {
    return (
        <div className="flex w-full h-full justify-center items-center">
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                <div className="sm:text-center text-4xl font-bold hover:text-[#A81D33]">
                    Backend
                </div>
                <div className="space-y-4">
                    <div className="flex justify-center space-x-10 h-24 ">
                        <StackNode />
                        <StackTypescript />
                        <StackExpress />
                        <StackPostman />
                    </div>
                    <div className="flex justify-center space-x-10 h-24 ">
                        <StackMySql />
                        <StackMongoDb />
                        <StackSequelize />
                        <StackJwt />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Backend;