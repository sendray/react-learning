// import { IComponentProps } from "../../../utils/types";

// import styles from './Explore.css';

const Component = () => {
  const elm = (
    <>
      <ul>
        <p>What is a Component ?</p>
        <li>Component is a function that returns a JSX / ReactElement</li>
        <li>
          JSX/ReactElement converted to JavaScript object and finally render as
          a HTML element in the DOM.
        </li>
      </ul>

      <ul>
        <p>What is a Component ?</p>
        <li>Component is a function that returns a JSX / ReactElement</li>
        <li>
          JSX/ReactElement converted to JavaScript object and finally render as
          a HTML element in the DOM.
        </li>
      </ul>
    </>
  );

  console.log(elm);
  return elm;
};

const Explore = () => {
  return (
    <>
      <Component />
    </>
  );
};

export default Explore;
