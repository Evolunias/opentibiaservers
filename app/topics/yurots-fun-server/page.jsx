import YurotsFunServerKeywordPage, { generateMetadata } from './yurots-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsFunServerKeywordPage />;
}
