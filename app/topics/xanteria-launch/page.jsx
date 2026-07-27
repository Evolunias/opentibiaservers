import XanteriaLaunchKeywordPage, { generateMetadata } from './xanteria-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaLaunchKeywordPage />;
}
