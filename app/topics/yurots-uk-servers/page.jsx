import YurotsUkServersKeywordPage, { generateMetadata } from './yurots-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsUkServersKeywordPage />;
}
