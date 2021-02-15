import classes from './Layout.module.scss';

const Layout: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <div className={classes.Wrapper}>
      <h1 className={classes.Title}>Dashboard</h1>
      <div
        className={classes.InnerWrapper}
        style={{ minHeight: `${window.innerHeight - 200}px` }}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
