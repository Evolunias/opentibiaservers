import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-kasteria-server');
}

export default function WithScreenshotsKasteriaServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-kasteria-server" />;
}
