import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-screenshots-server-france');
}

export default function YurotsWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-screenshots-server-france" />;
}
