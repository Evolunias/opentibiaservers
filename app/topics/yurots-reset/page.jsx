import YurotsResetKeywordPage, { generateMetadata } from './yurots-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsResetKeywordPage />;
}
