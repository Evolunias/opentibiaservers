import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-client-north-america');
}

export default function WithScreenshotsClientNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-client-north-america" />;
}
