import YurotsWarsKeywordPage, { generateMetadata } from './yurots-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsWarsKeywordPage />;
}
