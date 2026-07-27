import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-screenshots-server-uk');
}

export default function XanteriaWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-screenshots-server-uk" />;
}
