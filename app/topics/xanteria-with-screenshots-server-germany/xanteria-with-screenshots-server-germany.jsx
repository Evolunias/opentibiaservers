import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-screenshots-server-germany');
}

export default function XanteriaWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-screenshots-server-germany" />;
}
