import YurotsKeywordPage, { generateMetadata } from './yurots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsKeywordPage />;
}
