import YurotsTibiaKeywordPage, { generateMetadata } from './yurots-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsTibiaKeywordPage />;
}
