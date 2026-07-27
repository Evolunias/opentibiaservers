import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-client-europe');
}

export default function WithScreenshotsClientEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-client-europe" />;
}
