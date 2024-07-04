export default function Home() {
  return (
    <div className="flex-1 flex flex-col justify-end">
      <div className="relative h-8 tablet:h-16 laptop:h-20">
        <h1 className="animate-keep opacity-0 absolute left-[63.8px] tablet:left-[148.86px] laptop:left-[191.39px] font-pretendard font-medium text-2xl tablet:text-[56px] laptop:text-7xl tablet:leading-[64px] laptop:leading-[80px] text-gray-900 dark:text-gray-400">
          KEEP
        </h1>
      </div>
      <div className="relative h-8 tablet:h-16 laptop:h-20">
        <h1 className="animate-imje absolute font-pretendard font-medium text-2xl tablet:text-[56px] laptop:text-7xl tablet:leading-[64px] laptop:leading-[80px] text-gray-900 dark:text-gray-400">
          I'M JE
        </h1>
        <h1 className="animate-on absolute left-[63.8px] tablet:left-[148.86px] laptop:left-[191.39px] font-pretendard font-medium text-2xl tablet:text-[56px] laptop:text-7xl tablet:leading-[64px] laptop:leading-[80px] text-gray-900 dark:text-gray-400">
          ON
        </h1>
        <h1 className="animate-growing opacity-0 absolute left-[42px] tablet:left-[96px] laptop:left-[120px] font-pretendard font-medium text-2xl tablet:text-[56px] laptop:text-7xl tablet:leading-[64px] laptop:leading-[80px] text-gray-900 dark:text-gray-400">
          GROWING
        </h1>
      </div>
      <div className="mt-4">
        <h1 className="animate-job opacity-0 font-pretendard font-medium text-2xl tablet:text-[56px] laptop:text-7xl tablet:leading-[64px] laptop:leading-[80px] text-gray-900 dark:text-gray-400">
          FRONT-END DEVELOPER,
        </h1>
        <h1 className="animate-name opacity-0 font-pretendard font-medium text-2xl tablet:text-[56px] laptop:text-7xl tablet:leading-[64px] laptop:leading-[80px] text-gray-900 dark:text-gray-400">
          JEON BYEONGMIN
        </h1>
      </div>
    </div>
  );
}
