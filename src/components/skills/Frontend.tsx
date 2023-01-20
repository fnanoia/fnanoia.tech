import { StackHtml, StackReact, StackTailwind, StackVite } from "../stack/Stack";

const Frontend = () => {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
        <div className="sm:text-center text-4xl font-bold hover:text-[#A81D33]">
          Frontend
        </div>
        <div className="space-y-4">

          <div className="flex justify-center space-x-10 h-24 ">
            <StackHtml />
            <StackReact />
            <StackVite />
            <StackTailwind />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;