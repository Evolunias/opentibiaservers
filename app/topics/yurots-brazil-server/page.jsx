import YurotsBrazilServerKeywordPage, { generateMetadata } from './yurots-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsBrazilServerKeywordPage />;
}
