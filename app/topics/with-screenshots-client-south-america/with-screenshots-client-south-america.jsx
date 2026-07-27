import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-client-south-america');
}

export default function WithScreenshotsClientSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-client-south-america" />;
}
