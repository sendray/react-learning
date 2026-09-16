const Header = () => {
  return (
    <nav className="flex w-full box-border justify-between items-center px-4 sm:px-6 md:px-12 py-4 bg-(--nav-bg) text-(--fg)">
      <div className="logo">
        <div className="bold text-2xl">React Learning</div>
      </div>
    </nav>
  );
};

export default Header;