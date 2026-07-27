import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-screenshots-server-europe');
}

export default function XanteriaWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-screenshots-server-europe" />;
}
