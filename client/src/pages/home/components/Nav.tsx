const Nav = () => {
  return (
    <nav
      className="fixed top-0 px-6 left-0 w-full h-20  bg-cover bg-center bg-no-repeat flex justify-between items-center gap-2 z-50"
      style={{
        background:
          'radial-gradient(166.82% 166.82% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)',
      }}
    >
      <div className="text-white">
        <p className="font-bold text-[.9rem]">Frontend Mentor</p>
        <p className="text-[0.8125rem]">Feedback Board</p>
      </div>
      <svg
        width="20"
        height="17"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill="#FFF"
          fillRule="evenodd"
        >
          <path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z" />
        </g>
      </svg>
    </nav>
  );
};

export default Nav;
