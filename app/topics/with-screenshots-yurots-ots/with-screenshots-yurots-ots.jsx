import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-yurots-ots');
}

export default function WithScreenshotsYurotsOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-yurots-ots" />;
}
