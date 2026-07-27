import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-screenshots');
}

export default function YurotsScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="yurots-screenshots" />;
}
