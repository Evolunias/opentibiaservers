import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-servers-north-america');
}

export default function WithScreenshotsServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-servers-north-america" />;
}
