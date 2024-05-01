import LoginModal from "./LoginModal";
import Logout from "./Logout";
import RegisterModal from "./RegisterModal";
import { getServerSession } from "next-auth";

const LoginLogout = async () => {
  const session = await getServerSession();
  // console.log(session);
  return (
    <>
      {session?.user?.email ? (
        <Logout />
      ) : (
        <>
          <div className="hidden md:flex">
            <LoginModal />
            <RegisterModal />
          </div>
          <div className="flex md:hidden flex-col gap-3">
            <div>
              <LoginModal />
            </div>
            <div>
              <RegisterModal />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default LoginLogout;
