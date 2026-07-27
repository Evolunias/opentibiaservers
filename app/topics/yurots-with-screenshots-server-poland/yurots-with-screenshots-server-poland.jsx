import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-screenshots-server-poland');
}

export default function YurotsWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-screenshots-server-poland" />;
}
