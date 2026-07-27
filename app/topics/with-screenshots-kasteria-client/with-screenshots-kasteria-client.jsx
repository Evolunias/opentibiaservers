import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-kasteria-client');
}

export default function WithScreenshotsKasteriaClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-kasteria-client" />;
}
