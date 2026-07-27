import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-yurots');
}

export default function WithScreenshotsYurotsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-yurots" />;
}
