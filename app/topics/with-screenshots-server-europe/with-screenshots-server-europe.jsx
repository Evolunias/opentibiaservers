import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-server-europe');
}

export default function WithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-server-europe" />;
}
