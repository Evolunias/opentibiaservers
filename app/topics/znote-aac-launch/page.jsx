import ZnoteAacLaunchKeywordPage, { generateMetadata } from './znote-aac-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZnoteAacLaunchKeywordPage />;
}
