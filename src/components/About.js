import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <>
      <h1>This is an About Us page!</h1>
      {/* <User name={"John Doe (functional)"} location={"bangalore"} /> */}
      <UserClass name={"John Doe (class)"} location={"bangalore"} />
    </>
  );
};

export default About;
