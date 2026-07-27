import YurotsMapKeywordPage, { generateMetadata } from './yurots-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsMapKeywordPage />;
}
