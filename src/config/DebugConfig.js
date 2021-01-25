const useReactotron = process.env.DEBUG === 'true';
const useMirage = useReactotron;

const mirageLoad = async () => useMirage && import(
  /* webpackChunkName: "mirage-config" */
  /* webpackMode: "lazy" */
  './MirageConfig'
);

const reactotronLoad = () => useReactotron && import(
  /* webpackChunkName: "reactotron-config" */
  /* webpackMode: "lazy" */
  './ReactotronConfig'
);

export default () => Promise.all([
  mirageLoad(),
  reactotronLoad(),
]);
