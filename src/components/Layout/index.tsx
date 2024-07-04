import { Footer, Header } from '@/components';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div className="mx-auto px-4 pt-[92px] tablet:px-8 tablet:pt-[108px] laptop:px-12 laptop:pt-12 max-w-[1440px]">
        {children}
        <Footer />
      </div>
    </>
  );
};
