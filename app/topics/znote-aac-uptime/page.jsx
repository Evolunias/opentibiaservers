import ZnoteAacUptimeKeywordPage, { generateMetadata } from './znote-aac-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZnoteAacUptimeKeywordPage />;
}
