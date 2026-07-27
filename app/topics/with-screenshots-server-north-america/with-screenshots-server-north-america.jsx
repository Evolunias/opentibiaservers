import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-server-north-america');
}

export default function WithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-server-north-america" />;
}
