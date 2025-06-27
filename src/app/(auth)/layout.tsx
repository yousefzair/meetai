interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <div className="bg-muted flex min-h-svh
         flex-col items-center justify-center p-6
          md:p-10">
            <div className="w-full max-w-sm:max-w-3xl">
                {children}
            </div>
        </div>
    );
};

export default Layout;
