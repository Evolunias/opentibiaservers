import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realesta');
}

export default function WithScreenshotsRealestaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realesta" />;
}
