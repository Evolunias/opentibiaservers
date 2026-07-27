import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-screenshots-server-france');
}

export default function XanteriaWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-screenshots-server-france" />;
}
