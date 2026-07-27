import YurotsOtsKeywordPage, { generateMetadata } from './yurots-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsOtsKeywordPage />;
}
