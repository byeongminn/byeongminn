import {
  Education,
  Experiences,
  Introduction,
  Profile,
  Skills,
} from '@/components';

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-y-12 laptop:flex-row laptop:gap-x-3">
      <div className="flex-1 flex flex-col gap-y-12">
        <Profile />
        <Skills />
      </div>
      <div className="flex-1 grow-4 flex flex-col gap-y-12">
        <Introduction />
        <Experiences />
        <Education />
      </div>
    </div>
  );
}
