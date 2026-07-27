import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ot-server-europe');
}

export default function WithScreenshotsOtServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ot-server-europe" />;
}
