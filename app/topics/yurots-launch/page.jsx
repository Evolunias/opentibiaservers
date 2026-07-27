import YurotsLaunchKeywordPage, { generateMetadata } from './yurots-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsLaunchKeywordPage />;
}
