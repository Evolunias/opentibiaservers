import YurotsSouthAmericaServersKeywordPage, { generateMetadata } from './yurots-south-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsSouthAmericaServersKeywordPage />;
}
