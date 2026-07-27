import YurotsStatusKeywordPage, { generateMetadata } from './yurots-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsStatusKeywordPage />;
}
