import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-server-south-america');
}

export default function WithScreenshotsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-server-south-america" />;
}
